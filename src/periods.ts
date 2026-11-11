export type Granularity = 'month' | 'quarter' | 'year'

export function periodKey(date: string, g: Granularity): string {
  const year = date.slice(0, 4)
  const month = Number(date.slice(5, 7))
  if (g === 'year') return year
  if (g === 'quarter') return `${year} Q${Math.ceil(month / 3)}`
  return `${year}-${String(month).padStart(2, '0')}`
}

/** All consecutive period keys between two dates (inclusive), so empty periods still show on the chart. */
export function periodRange(from: string, to: string, g: Granularity): string[] {
  const keys: string[] = []
  let y = Number(from.slice(0, 4))
  let m = Number(from.slice(5, 7))
  const end = periodKey(to, g)
  const step = g === 'year' ? 12 : g === 'quarter' ? 3 : 1
  if (g === 'quarter') m = Math.floor((m - 1) / 3) * 3 + 1
  if (g === 'year') m = 1
  for (;;) {
    const key = periodKey(`${y}-${String(m).padStart(2, '0')}-01`, g)
    keys.push(key)
    if (key === end) break
    m += step
    if (m > 12) {
      m -= 12
      y += 1
    }
  }
  return keys
}
