"""Enrich src/data/papers.json with author organizations and build src/data/citations.json.

Uses the OpenAlex API (institutions are ROR-normalized). Raw responses are cached in
scripts/.cache so re-runs don't spend API credits.

    python3 scripts/fetch_orgs_citations.py
"""
import csv
import hashlib
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / 'src' / 'data'
CACHE = Path(__file__).resolve().parent / '.cache'
EXPORTS = ROOT / 'exports'
API = 'https://api.openalex.org/works'
WORK_FIELDS = 'id,doi,ids,display_name,publication_date,authorships,primary_location,type'
CITING_FIELDS = WORK_FIELDS + ',referenced_works'


def get(params: dict) -> dict:
    key_param = {'api_key': os.environ['OPENALEX_API_KEY']} if os.environ.get('OPENALEX_API_KEY') else {}
    url = f'{API}?{urllib.parse.urlencode(params)}'
    key = CACHE / (hashlib.sha1(url.encode()).hexdigest() + '.json')
    if key.exists():
        return json.loads(key.read_text())
    for attempt in range(6):
        try:
            with urllib.request.urlopen(url + ('&' + urllib.parse.urlencode(key_param) if key_param else ''), timeout=60) as r:
                data = json.load(r)
            CACHE.mkdir(exist_ok=True)
            key.write_text(json.dumps(data))
            time.sleep(0.2)
            return data
        except urllib.error.HTTPError as e:
            if e.code == 429 and attempt < 5:
                time.sleep(5 * (attempt + 1))
                continue
            sys.exit(f'OpenAlex error {e.code} for {url}: {e.read()[:300]!r}')
    raise RuntimeError('unreachable')


def get_all(filter_: str, select: str) -> list[dict]:
    # Page-number paging (cursor paging needs an API key); fine below OpenAlex's 10k-result limit.
    out, page = [], 1
    while True:
        data = get({'filter': filter_, 'select': select, 'per-page': 200, 'page': page})
        out += data['results']
        if len(out) >= data['meta']['count'] or not data['results']:
            return out
        page += 1


def chunks(seq, n):
    for i in range(0, len(seq), n):
        yield seq[i:i + n]


def short_id(openalex_id: str) -> str:
    return openalex_id.rsplit('/', 1)[-1]


def organizations(work: dict) -> list[dict]:
    seen, out = set(), []
    for a in work.get('authorships') or []:
        for inst in a.get('institutions') or []:
            name = inst.get('display_name')
            if name and name not in seen:
                seen.add(name)
                out.append({'name': name, 'country': inst.get('country_code') or None})
    return out


def merge_orgs(*lists: list[dict]) -> list[dict]:
    seen, out = set(), []
    for lst in lists:
        for o in lst:
            if o['name'] not in seen:
                seen.add(o['name'])
                out.append(o)
    return out


def work_url(w: dict) -> str:
    ids = w.get('ids') or {}
    doi = (w.get('doi') or '').replace('https://doi.org/', '')
    if doi.lower().startswith('10.48550/arxiv.'):
        return f'https://arxiv.org/abs/{doi[len("10.48550/arxiv."):]}'
    if doi:
        return f'https://doi.org/{doi}'
    return (w.get('primary_location') or {}).get('landing_page_url') or ids.get('openalex', w['id'])


def venue(w: dict) -> str:
    src = ((w.get('primary_location') or {}).get('source') or {})
    return src.get('display_name') or ''


def main():
    papers = json.loads((DATA / 'papers.json').read_text())

    # 1. Resolve tracked papers to OpenAlex works (a preprint and its published version may be separate works).
    doi_to_paper: dict[str, str] = {}
    for p in papers:
        if p.get('doi'):
            doi_to_paper[p['doi'].lower()] = p['id']
        if p.get('arxiv'):
            doi_to_paper[f'10.48550/arxiv.{p["arxiv"]}'.lower()] = p['id']
    works_by_paper: dict[str, list[dict]] = defaultdict(list)
    for batch in chunks(sorted(doi_to_paper), 50):
        for w in get_all('doi:' + '|'.join(batch), WORK_FIELDS):
            doi = (w.get('doi') or '').replace('https://doi.org/', '').lower()
            pid = doi_to_paper.get(doi)
            if pid and all(x['id'] != w['id'] for x in works_by_paper[pid]):
                works_by_paper[pid].append(w)

    work_to_paper = {short_id(w['id']): pid for pid, ws in works_by_paper.items() for w in ws}
    print(f'resolved {len(works_by_paper)}/{len(papers)} tracked papers to {len(work_to_paper)} OpenAlex works')

    # 2. Every work citing any tracked paper.
    citing: dict[str, dict] = {}
    for batch in chunks(sorted(work_to_paper), 100):
        for w in get_all('cites:' + '|'.join(batch), CITING_FIELDS):
            citing[short_id(w['id'])] = w
    print(f'{len(citing)} citing works')

    tracked_by_work = {}
    for pid, ws in works_by_paper.items():
        for w in ws:
            tracked_by_work[short_id(w['id'])] = pid

    citations = []
    cited_by: dict[str, set[str]] = defaultdict(set)
    for wid, w in citing.items():
        cites = sorted({work_to_paper[short_id(r)] for r in w.get('referenced_works') or [] if short_id(r) in work_to_paper})
        own_paper = tracked_by_work.get(wid)
        cites = [c for c in cites if c != own_paper]
        if not cites:
            continue
        cid = own_paper or f'openalex-{wid}'
        for c in cites:
            cited_by[c].add(cid)
        citations.append({
            'id': cid,
            'title': ' '.join((w.get('display_name') or '').split()),
            'date': w.get('publication_date') or '',
            'venue': venue(w),
            'url': work_url(w),
            'authors': [a['author']['display_name'] for a in w.get('authorships') or [] if a.get('author')],
            'organizations': organizations(w),
            'cites': cites,
            'tracked': own_paper is not None,
        })

    # A preprint and its published version can both cite us; keep one entry per paper.
    merged: dict[str, dict] = {}
    for c in citations:
        key = c['id'] if c['tracked'] else ''.join(ch for ch in c['title'].lower() if ch.isalnum())
        if key in merged:
            m = merged[key]
            m['cites'] = sorted(set(m['cites']) | set(c['cites']))
            m['organizations'] = merge_orgs(m['organizations'], c['organizations'])
            m['date'] = min(filter(None, [m['date'], c['date']]), default='')
        else:
            merged[key] = c
    citations = sorted(merged.values(), key=lambda c: c['date'], reverse=True)
    cited_by = defaultdict(set)
    for c in citations:
        for t in c['cites']:
            cited_by[t].add(c['id'])

    # 3. Write enriched papers + citations.
    overrides = json.loads((Path(__file__).resolve().parent / 'org_overrides.json').read_text())
    for p in papers:
        orgs = merge_orgs(*(organizations(w) for w in works_by_paper.get(p['id'], [])))
        o = overrides.get(p['id'], {})
        p['organizations'] = o['replace'] if 'replace' in o else merge_orgs(orgs, o.get('add', []))
        p['citedBy'] = len(cited_by.get(p['id'], ()))
    paper_by_id = {p['id']: p for p in papers}
    for c in citations:
        if c['tracked']:
            c['organizations'] = paper_by_id[c['id']]['organizations']
    (DATA / 'papers.json').write_text(json.dumps(papers, indent=1, ensure_ascii=False))
    (DATA / 'citations.json').write_text(json.dumps(citations, indent=1, ensure_ascii=False))

    EXPORTS.mkdir(exist_ok=True)
    titles = {p['id']: p['title'] for p in papers}
    with open(EXPORTS / 'paper_organizations.csv', 'w', newline='') as f:
        wr = csv.writer(f)
        wr.writerow(['paper_id', 'date', 'title', 'url', 'organizations', 'countries', 'cited_by'])
        for p in papers:
            wr.writerow([p['id'], p['date'], p['title'], p['url'],
                         '; '.join(o['name'] for o in p['organizations']),
                         '; '.join(sorted({o['country'] for o in p['organizations'] if o['country']})),
                         p['citedBy']])
    with open(EXPORTS / 'citing_papers.csv', 'w', newline='') as f:
        wr = csv.writer(f)
        wr.writerow(['id', 'date', 'title', 'url', 'venue', 'organizations', 'countries', 'cites_tracked_papers', 'in_tracker'])
        for c in citations:
            wr.writerow([c['id'], c['date'], c['title'], c['url'], c['venue'],
                         '; '.join(o['name'] for o in c['organizations']),
                         '; '.join(sorted({o['country'] for o in c['organizations'] if o['country']})),
                         '; '.join(titles[t] for t in c['cites']), c['tracked']])
    org_papers, org_citing = Counter(), Counter()
    for p in papers:
        org_papers.update({o['name'] for o in p['organizations']})
    for c in citations:
        org_citing.update({o['name'] for o in c['organizations']})
    with open(EXPORTS / 'organizations.csv', 'w', newline='') as f:
        wr = csv.writer(f)
        wr.writerow(['organization', 'tracked_papers', 'citing_papers'])
        for org in sorted(set(org_papers) | set(org_citing), key=lambda o: (-org_papers[o], -org_citing[o], o)):
            wr.writerow([org, org_papers[org], org_citing[org]])

    with_orgs = sum(1 for p in papers if p['organizations'])
    print(f'{with_orgs}/{len(papers)} tracked papers have organizations')
    print(f'{len(citations)} citing papers ({sum(c["tracked"] for c in citations)} are tracked papers), '
          f'{sum(1 for c in citations if c["organizations"])} with organizations')


if __name__ == '__main__':
    main()
