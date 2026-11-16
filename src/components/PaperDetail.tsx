import { useEffect, useState } from 'react'
import { categoryById, type Paper } from '../data'
import { useCitations } from '../citations'
import { formatDate } from './PaperList'

interface Props {
  paper: Paper
  onClose: () => void
}

export default function PaperDetail({ paper, onClose }: Props) {
  const cat = categoryById.get(paper.category)!
  const citations = useCitations()
  const [showAll, setShowAll] = useState(false)
  const citing = citations?.filter((c) => c.cites.includes(paper.id)) ?? []

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal" role="dialog" aria-modal="true" aria-label={paper.title} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <span className="badge" style={{ background: `${cat.color}22`, color: cat.color, borderColor: cat.color }}>
          {cat.name}
        </span>
        <h2 className="modal-title">{paper.title}</h2>
        <p className="modal-authors">{paper.authors.join(', ') || 'Unknown authors'}</p>

        <dl className="modal-facts">
          <dt>Published</dt>
          <dd>{formatDate(paper)}</dd>
          {paper.venue && (
            <>
              <dt>Venue</dt>
              <dd>{paper.venue}</dd>
            </>
          )}
          {paper.arxiv && (
            <>
              <dt>arXiv</dt>
              <dd>{paper.arxiv}</dd>
            </>
          )}
          {paper.doi && (
            <>
              <dt>DOI</dt>
              <dd>{paper.doi}</dd>
            </>
          )}
          {paper.rwkvVersions.length > 0 && (
            <>
              <dt>RWKV versions</dt>
              <dd>{paper.rwkvVersions.join(', ')}</dd>
            </>
          )}
        </dl>

        <div className="modal-links">
          <a href={paper.url} target="_blank" rel="noopener noreferrer">
            Paper page ↗
          </a>
          {paper.pdf && (
            <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
              PDF ↗
            </a>
          )}
          {paper.doi && !paper.url.includes(paper.doi) && (
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
              DOI ↗
            </a>
          )}
        </div>

        <h3>Abstract</h3>
        <p className="modal-abstract">{paper.abstract || 'No abstract available — see the paper page.'}</p>

        <h3>Organizations</h3>
        {paper.organizations.length > 0 ? (
          <ul className="modal-orgs">
            {paper.organizations.map((o) => (
              <li key={o.name}>
                {o.name}
                {o.country && <span className="muted"> ({o.country})</span>}
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted small">No affiliation data available.</p>
        )}

        <h3>
          Cited by <span className="muted">({citations ? citing.length : '…'})</span>
        </h3>
        {citations && citing.length === 0 && <p className="muted small">No citing papers found in OpenAlex.</p>}
        <ul className="citing-list compact">
          {citing.slice(0, showAll ? undefined : 15).map((c) => (
            <li key={c.id}>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="citing-title">
                {c.title}
              </a>
              <div className="paper-meta">
                {c.date.slice(0, 7)}
                {c.organizations.length > 0 && <> · {c.organizations.map((o) => o.name).join(' · ')}</>}
              </div>
            </li>
          ))}
        </ul>
        {citing.length > 15 && (
          <button className="link-button small" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show fewer' : `Show all ${citing.length}`}
          </button>
        )}
      </article>
    </div>
  )
}
