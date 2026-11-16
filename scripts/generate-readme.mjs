// Regenerates README.md (the linked, categorized paper list) from src/data/*.json.
import { readFileSync, writeFileSync } from 'node:fs'

const papers = JSON.parse(readFileSync('src/data/papers.json', 'utf8'))
const categories = JSON.parse(readFileSync('src/data/categories.json', 'utf8'))
const citations = JSON.parse(readFileSync('src/data/citations.json', 'utf8'))

const anchor = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-')
const esc = (s) => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ')
const authors = (a) => (a.length > 3 ? `${a.slice(0, 3).join(', ')} et al.` : a.join(', '))
const date = (p) => (p.datePrecision === 'year' ? p.date.slice(0, 4) : p.date.slice(0, 7))
const orgs = (p) => {
  const names = p.organizations.map((o) => o.name)
  return names.length > 3 ? `${names.slice(0, 3).join('; ')} +${names.length - 3}` : names.join('; ')
}
const topOrgs = (items, n) => {
  const counts = new Map()
  for (const it of items) for (const o of it.organizations) counts.set(o.name, (counts.get(o.name) ?? 0) + 1)
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n)
}

const years = papers.map((p) => p.date.slice(0, 4)).sort()
let md = `# RWKV Paper Tracker

A curated, categorized list of **${papers.length} research papers** built around the
[RWKV](https://github.com/BlinkDL/RWKV-LM) (Receptance Weighted Key Value) linear-attention architecture,
spanning ${years[0]}–${years.at(-1)}. Papers are included when RWKV is the central architecture or object of study,
not when it only appears as a baseline.

The interactive site (category browser, paper details and publication timeline) is a React + TypeScript app
built by GitHub Actions and served on GitHub Pages.

## Development

\`\`\`bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run readme   # regenerate this README from src/data/*.json
python3 scripts/fetch_orgs_citations.py   # refresh organizations + citing papers from OpenAlex
\`\`\`

Paper data lives in [\`src/data/papers.json\`](src/data/papers.json); categories in
[\`src/data/categories.json\`](src/data/categories.json); the **${citations.length} papers citing tracked RWKV
papers** in [\`src/data/citations.json\`](src/data/citations.json). CSV exports:
[\`exports/paper_organizations.csv\`](exports/paper_organizations.csv),
[\`exports/citing_papers.csv\`](exports/citing_papers.csv),
[\`exports/organizations.csv\`](exports/organizations.csv).

Affiliations come from OpenAlex (ROR-normalized institutions); organizations missing from OpenAlex (e.g. EleutherAI,
Recursal AI) were filled by hand from the papers' author blocks in
[\`scripts/org_overrides.json\`](scripts/org_overrides.json).

## Top organizations

| Authoring tracked papers | Papers | Citing tracked papers | Papers |
| --- | ---: | --- | ---: |
`
{
  const a = topOrgs(papers, 20)
  const b = topOrgs(citations, 20)
  for (let i = 0; i < 20; i++) md += `| ${esc(a[i]?.[0] ?? '')} | ${a[i]?.[1] ?? ''} | ${esc(b[i]?.[0] ?? '')} | ${b[i]?.[1] ?? ''} |\n`
}
md += `
## Categories

| Category | Papers |
| --- | ---: |
`
for (const c of categories) {
  const n = papers.filter((p) => p.category === c.id).length
  md += `| [${c.name}](#${anchor(c.name)}) | ${n} |\n`
}

for (const c of categories) {
  const list = papers.filter((p) => p.category === c.id).sort((a, b) => b.date.localeCompare(a.date))
  md += `\n## ${c.name}\n\n${c.description}\n\n| Date | Paper | Authors | Organizations | Venue | Cited by |\n| --- | --- | --- | --- | --- | ---: |\n`
  for (const p of list) {
    const links = [`[${esc(p.title)}](${p.url})`]
    if (p.pdf) links.push(`[[pdf]](${p.pdf})`)
    md += `| ${date(p)} | ${links.join(' ')} | ${esc(authors(p.authors))} | ${esc(orgs(p))} | ${esc(p.venue || '')} | ${p.citedBy || ''} |\n`
  }
}

writeFileSync('README.md', md)
console.log(`README.md written with ${papers.length} papers`)
