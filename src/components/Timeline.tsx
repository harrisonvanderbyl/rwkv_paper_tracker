import { useMemo } from 'react'
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipContentProps,
} from 'recharts'
import { categories, categoryById, type Paper } from '../data'
import { periodKey, periodRange, type Granularity } from '../periods'

interface Props {
  papers: Paper[]
  granularity: Granularity
  selectedPeriod: string | null
  onSelectPeriod: (period: string) => void
}

type Row = { period: string; total: number; cumulative: number } & Record<string, number | string>

function TimelineTooltip({ active, payload, label }: TooltipContentProps) {
  if (!active || !payload?.length) return null
  const row = payload[0].payload as Row
  const items = categories.filter((c) => (row[c.id] as number) > 0)
  return (
    <div className="tooltip">
      <div className="tooltip-title">
        {label} — {row.total} paper{row.total === 1 ? '' : 's'}
      </div>
      {items.map((c) => (
        <div key={c.id} className="tooltip-row">
          <span className="dot" style={{ background: c.color }} />
          {c.name}: {row[c.id]}
        </div>
      ))}
      <div className="tooltip-foot">Cumulative: {row.cumulative}</div>
    </div>
  )
}

export default function Timeline({ papers, granularity, selectedPeriod, onSelectPeriod }: Props) {
  const { data, usedCategories } = useMemo(() => {
    if (papers.length === 0) return { data: [] as Row[], usedCategories: [] as string[] }
    const dates = papers.map((p) => p.date).sort()
    const keys = periodRange(dates[0], dates[dates.length - 1], granularity)
    const rows = new Map<string, Row>(keys.map((k) => [k, { period: k, total: 0, cumulative: 0 } as Row]))
    const used = new Set<string>()
    for (const p of papers) {
      const row = rows.get(periodKey(p.date, granularity))!
      row[p.category] = ((row[p.category] as number) ?? 0) + 1
      row.total += 1
      used.add(p.category)
    }
    let running = 0
    for (const row of rows.values()) {
      running += row.total
      row.cumulative = running
      for (const id of used) row[id] ??= 0
    }
    return { data: [...rows.values()], usedCategories: categories.map((c) => c.id).filter((id) => used.has(id)) }
  }, [papers, granularity])

  if (data.length === 0) return <p className="empty">No papers match the current filters.</p>

  return (
    <div className="timeline">
      <ResponsiveContainer width="100%" height={340}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 0, left: -10 }}
          onClick={(state) => {
            if (state?.activeLabel != null) onSelectPeriod(String(state.activeLabel))
          }}
          style={{ cursor: 'pointer' }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--grid)" vertical={false} />
          <XAxis dataKey="period" tick={{ fontSize: 11, fill: 'var(--muted)' }} minTickGap={12} />
          <YAxis yAxisId="count" allowDecimals={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} />
          <YAxis yAxisId="cum" orientation="right" allowDecimals={false} tick={{ fontSize: 11, fill: 'var(--muted)' }} />
          <Tooltip content={TimelineTooltip} cursor={{ fill: 'var(--hover)' }} />
          {usedCategories.map((id) => (
            <Bar key={id} yAxisId="count" dataKey={id} stackId="papers" fill={categoryById.get(id)!.color} isAnimationActive={false}>
              {data.map((row) => (
                <Cell key={row.period} fillOpacity={selectedPeriod && selectedPeriod !== row.period ? 0.25 : 1} />
              ))}
            </Bar>
          ))}
          <Line
            yAxisId="cum"
            type="monotone"
            dataKey="cumulative"
            stroke="var(--text)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
