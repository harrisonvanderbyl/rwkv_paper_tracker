import { useMemo, useState } from 'react'
import { papers } from '../data'
import type { Citation } from '../citations'

interface Props {
  citations: Citation[] | null
  org: string | null
}

const PAGE = 30
const titleById = new Map(papers.map((p) => [p.id, p.title]))

export default function CitingPapers({ citations, org }: Props) {
  const [query, setQuery] = useState('')
  const [limit, setLimit] = useState(PAGE)

  const filtered = useMemo(() => {
    if (!citations) return []
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
    return citations.filter((c) => {
      if (org && !c.organizations.some((o) => o.name === org)) return false
      if (!terms.length) return true
      const hay = `${c.title} ${c.authors.join(' ')} ${c.venue} ${c.organizations.map((o) => o.name).join(' ')}`.toLowerCase()
      return terms.every((t) => hay.includes(t))
    })
  }, [citations, query, org])

  if (!citations) return <p className="muted">Loading citations…</p>

  return (
    <>
      <input
        className="search small-search"
        type="search"
        placeholder="Search citing papers by title, author, venue or organization…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setLimit(PAGE)
        }}
      />
      <p className="muted small">{filtered.length} citing papers</p>
      <ul className="citing-list">
        {filtered.slice(0, limit).map((c) => (
          <li key={c.id}>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="citing-title">
              {c.title}
            </a>
            {c.tracked && <span className="tag">in tracker</span>}
            <div className="paper-meta">
              {c.date.slice(0, 7)}
              {c.venue && <> · <em>{c.venue}</em></>}
            </div>
            {c.organizations.length > 0 && (
              <div className="paper-meta">{c.organizations.map((o) => o.name).join(' · ')}</div>
            )}
            <div className="paper-meta cites">
              Cites: {c.cites.map((id) => titleById.get(id)).join(' | ')}
            </div>
          </li>
        ))}
      </ul>
      {filtered.length > limit && (
        <button className="more-button" onClick={() => setLimit(limit + PAGE)}>
          Show more ({filtered.length - limit} remaining)
        </button>
      )}
    </>
  )
}
