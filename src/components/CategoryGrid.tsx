import { categories, type Paper } from '../data'

interface Props {
  papers: Paper[]
  selected: string | null
  onSelect: (id: string) => void
}

export default function CategoryGrid({ papers, selected, onSelect }: Props) {
  const max = Math.max(1, ...categories.map((c) => papers.filter((p) => p.category === c.id).length))

  return (
    <div className="category-grid">
      {categories.map((c) => {
        const inCat = papers.filter((p) => p.category === c.id)
        const years = inCat.map((p) => p.date.slice(0, 4)).sort()
        return (
          <button
            key={c.id}
            className={`category-card${selected === c.id ? ' selected' : ''}`}
            style={{ borderLeftColor: c.color }}
            onClick={() => onSelect(c.id)}
            disabled={inCat.length === 0}
          >
            <div className="category-top">
              <span className="category-name">{c.name}</span>
              <span className="category-count" style={{ color: c.color }}>
                {inCat.length}
              </span>
            </div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${(inCat.length / max) * 100}%`, background: c.color }} />
            </div>
            <p className="category-desc">{c.description}</p>
            {years.length > 0 && (
              <span className="muted small">
                {years[0] === years[years.length - 1] ? years[0] : `${years[0]}–${years[years.length - 1]}`}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
