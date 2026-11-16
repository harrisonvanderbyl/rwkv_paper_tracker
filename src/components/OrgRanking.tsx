import { useState } from 'react'
import type { Organization } from '../data'

interface Props {
  title: string
  items: { organizations: Organization[] }[] | null
  selected: string | null
  onSelect?: (name: string) => void
  unit: string
}

const TOP = 15

function flag(country: string | null) {
  if (!country || country.length !== 2) return ''
  return String.fromCodePoint(...[...country.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)))
}

export default function OrgRanking({ title, items, selected, onSelect, unit }: Props) {
  const [expanded, setExpanded] = useState(false)

  if (!items) return <div className="org-col"><h3>{title}</h3><p className="muted small">Loading…</p></div>

  const counts = new Map<string, { org: Organization; n: number }>()
  for (const item of items) {
    for (const org of item.organizations) {
      const e = counts.get(org.name)
      if (e) e.n += 1
      else counts.set(org.name, { org, n: 1 })
    }
  }
  const ranked = [...counts.values()].sort((a, b) => b.n - a.n || a.org.name.localeCompare(b.org.name))
  const shown = ranked.slice(0, expanded ? 100 : TOP)
  const max = ranked[0]?.n ?? 1

  return (
    <div className="org-col">
      <h3>
        {title} <span className="muted small">({ranked.length} orgs)</span>
      </h3>
      <ol className="org-list">
        {shown.map(({ org, n }) => {
          const content = (
            <>
              <span className="org-name">
                {flag(org.country)} {org.name}
              </span>
              <span className="org-bar" style={{ width: `${(n / max) * 100}%` }} />
              <span className="org-count" title={`${n} ${unit}`}>
                {n}
              </span>
            </>
          )
          return (
            <li key={org.name}>
              {onSelect ? (
                <button className={`org-row${selected === org.name ? ' selected' : ''}`} onClick={() => onSelect(org.name)}>
                  {content}
                </button>
              ) : (
                <div className="org-row">{content}</div>
              )}
            </li>
          )
        })}
      </ol>
      {ranked.length > TOP && (
        <button className="link-button small" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show top 15' : `Show top ${Math.min(100, ranked.length)}`}
        </button>
      )}
    </div>
  )
}
