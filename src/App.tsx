import { useMemo, useState } from 'react'
import { categories, categoryById, papers, type Paper } from './data'
import { periodKey, type Granularity } from './periods'
import Timeline from './components/Timeline'
import CategoryGrid from './components/CategoryGrid'
import PaperList from './components/PaperList'
import PaperDetail from './components/PaperDetail'

function matchesQuery(p: Paper, q: string) {
  if (!q) return true
  const hay = `${p.title} ${p.authors.join(' ')} ${p.venue} ${p.abstract} ${p.arxiv ?? ''}`.toLowerCase()
  return q
    .toLowerCase()
    .split(/\s+/)
    .every((term) => hay.includes(term))
}

export default function App() {
  const [category, setCategory] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [granularity, setGranularity] = useState<Granularity>('quarter')
  const [period, setPeriod] = useState<string | null>(null)
  const [selected, setSelected] = useState<Paper | null>(null)

  const searched = useMemo(() => papers.filter((p) => matchesQuery(p, query.trim())), [query])
  const inCategory = useMemo(
    () => (category ? searched.filter((p) => p.category === category) : searched),
    [searched, category],
  )
  const listed = useMemo(
    () => (period ? inCategory.filter((p) => periodKey(p.date, granularity) === period) : inCategory),
    [inCategory, period, granularity],
  )

  const years = papers.map((p) => p.date.slice(0, 4)).sort()
  const activeCategory = category ? categoryById.get(category) : undefined

  const changeGranularity = (g: Granularity) => {
    setGranularity(g)
    setPeriod(null)
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>RWKV Paper Tracker</h1>
          <p className="subtitle">
            Research papers built around the <strong>RWKV</strong> (Receptance Weighted Key Value) linear-attention
            architecture, organized by research area.
          </p>
        </div>
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{papers.length}</span>
            <span className="stat-label">papers</span>
          </div>
          <div className="stat">
            <span className="stat-value">{categories.length}</span>
            <span className="stat-label">categories</span>
          </div>
          <div className="stat">
            <span className="stat-value">
              {years[0]}–{years[years.length - 1]}
            </span>
            <span className="stat-label">span</span>
          </div>
        </div>
      </header>

      <div className="search-row">
        <input
          className="search"
          type="search"
          placeholder="Search titles, authors, venues, abstracts…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <section className="panel">
        <div className="panel-header">
          <h2>
            Publication timeline
            {activeCategory && <span className="muted"> · {activeCategory.name}</span>}
          </h2>
          <div className="toggle">
            {(['month', 'quarter', 'year'] as const).map((g) => (
              <button key={g} className={g === granularity ? 'active' : ''} onClick={() => changeGranularity(g)}>
                {g}
              </button>
            ))}
          </div>
        </div>
        <Timeline
          papers={inCategory}
          granularity={granularity}
          selectedPeriod={period}
          onSelectPeriod={(p) => setPeriod(p === period ? null : p)}
        />
        <p className="hint">Click a bar to filter the list to that period. Bars are stacked by category; the line shows the cumulative total.</p>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Categories</h2>
          {category && (
            <button className="link-button" onClick={() => setCategory(null)}>
              Show all
            </button>
          )}
        </div>
        <CategoryGrid papers={searched} selected={category} onSelect={(id) => setCategory(id === category ? null : id)} />
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>
            Papers <span className="muted">({listed.length})</span>
          </h2>
          <div className="chips">
            {activeCategory && (
              <button className="chip" style={{ borderColor: activeCategory.color }} onClick={() => setCategory(null)}>
                {activeCategory.name} ✕
              </button>
            )}
            {period && (
              <button className="chip" onClick={() => setPeriod(null)}>
                {period} ✕
              </button>
            )}
            {query && (
              <button className="chip" onClick={() => setQuery('')}>
                “{query}” ✕
              </button>
            )}
          </div>
        </div>
        <PaperList key={`${category}|${period}|${query}`} papers={listed} onSelect={setSelected} />
      </section>

      <footer className="footer">
        Collected from arXiv and Semantic Scholar. Papers are included when RWKV is the central architecture, not
        merely a baseline. Missing a paper? Add it to <code>src/data/papers.json</code>.
      </footer>

      {selected && <PaperDetail paper={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
