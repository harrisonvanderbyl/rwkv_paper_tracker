import { useState } from 'react'
import { categoryById, type Paper } from '../data'

interface Props {
  papers: Paper[]
  onSelect: (paper: Paper) => void
}

const PAGE = 40

export function formatDate(p: Paper) {
  if (p.datePrecision === 'year') return p.date.slice(0, 4)
  return new Date(`${p.date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatAuthors(authors: string[], max = 3) {
  if (authors.length <= max) return authors.join(', ')
  return `${authors.slice(0, max).join(', ')} et al.`
}

export default function PaperList({ papers, onSelect }: Props) {
  const [oldestFirst, setOldestFirst] = useState(false)
  const [limit, setLimit] = useState(PAGE)

  const sorted = [...papers].sort((a, b) => (oldestFirst ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)))
  const shown = sorted.slice(0, limit)

  if (papers.length === 0) return <p className="empty">No papers match the current filters.</p>

  return (
    <>
      <div className="list-controls">
        <button className="link-button" onClick={() => setOldestFirst(!oldestFirst)}>
          Sort: {oldestFirst ? 'oldest first' : 'newest first'}
        </button>
      </div>
      <ul className="paper-list">
        {shown.map((p) => {
          const cat = categoryById.get(p.category)!
          return (
            <li key={p.id}>
              <button className="paper-item" onClick={() => onSelect(p)}>
                <span className="paper-date">{formatDate(p)}</span>
                <span className="paper-main">
                  <span className="paper-title">{p.title}</span>
                  <span className="paper-meta">
                    {formatAuthors(p.authors)}
                    {p.venue && <> · <em>{p.venue}</em></>}
                  </span>
                  {p.organizations.length > 0 && (
                    <span className="paper-meta">
                      {p.organizations
                        .slice(0, 3)
                        .map((o) => o.name)
                        .join(' · ')}
                      {p.organizations.length > 3 && ` +${p.organizations.length - 3}`}
                    </span>
                  )}
                </span>
                <span className="paper-side">
                  <span className="badge" style={{ background: `${cat.color}22`, color: cat.color, borderColor: cat.color }}>
                    {cat.name}
                  </span>
                  {p.citedBy > 0 && <span className="muted small">cited by {p.citedBy}</span>}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      {sorted.length > limit && (
        <button className="more-button" onClick={() => setLimit(limit + PAGE)}>
          Show more ({sorted.length - limit} remaining)
        </button>
      )}
    </>
  )
}
