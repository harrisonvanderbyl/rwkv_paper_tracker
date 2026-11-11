import { useEffect } from 'react'
import { categoryById, type Paper } from '../data'
import { formatDate } from './PaperList'

interface Props {
  paper: Paper
  onClose: () => void
}

export default function PaperDetail({ paper, onClose }: Props) {
  const cat = categoryById.get(paper.category)!

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
      </article>
    </div>
  )
}
