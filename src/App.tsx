import { useMemo, useState } from 'react'
import { categories, categoryById, papers, type Paper } from './data'
import { periodKey, type Granularity } from './periods'
import Timeline from './components/Timeline'
import CategoryGrid from './components/CategoryGrid'
import PaperList from './components/PaperList'
import PaperDetail from './components/PaperDetail'
import OrgRanking from './components/OrgRanking'
import CitingPapers from './components/CitingPapers'
import { useCitations } from './citations'

function matchesQuery(p: Paper, q: string) {
  if (!q) return true
  const hay = `${p.title} ${p.authors.join(' ')} ${p.venue} ${p.abstract} ${p.arxiv ?? ''} ${p.organizations
    .map((o) => o.name)
    .join(' ')}`.toLowerCase()
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
  const [org, setOrg] = useState<string | null>(null)
  const citations = useCitations()

  const searched = useMemo(
    () =>
      papers.filter(
        (p) => matchesQuery(p, query.trim()) && (!org || p.organizations.some((o) => o.name === org)),
      ),
    [query, org],
  )
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
            <span className="stat-value">{citations ? citations.length : '…'}</span>
            <span className="stat-label">citing papers</span>
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
            {org && (
              <button className="chip" onClick={() => setOrg(null)}>
                {org} ✕
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
        <PaperList key={`${category}|${period}|${query}|${org}`} papers={listed} onSelect={setSelected} />
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Organizations</h2>
          {org && (
            <button className="link-button" onClick={() => setOrg(null)}>
              Clear organization filter
            </button>
          )}
        </div>
        <div className="org-grid">
          <OrgRanking
            title="Authoring tracked papers"
            items={inCategory}
            selected={org}
            onSelect={(name) => setOrg(name === org ? null : name)}
            unit="tracked papers"
          />
          <OrgRanking title="Citing RWKV papers" items={citations} selected={org} unit="citing papers" />
        </div>
        <p className="hint">
          Click an authoring organization to filter the timeline, categories and paper lists. Affiliations come from
          OpenAlex (ROR-normalized) plus hand-checked author blocks for the core RWKV papers.
        </p>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Papers citing RWKV research</h2>
          {org && <span className="muted small">filtered to {org}</span>}
        </div>
        <CitingPapers citations={citations} org={org} />
      </section>

      <footer className="footer">
        Collected from arXiv, Semantic Scholar and OpenAlex. Papers are included when RWKV is the central architecture, not
        merely a baseline. Missing a paper? Add it to <code>src/data/papers.json</code>.
      </footer>

      {selected && <PaperDetail paper={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
