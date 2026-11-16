import { useEffect, useState } from 'react'
import type { Organization } from './data'

export interface Citation {
  id: string
  title: string
  date: string
  venue: string
  url: string
  authors: string[]
  organizations: Organization[]
  cites: string[]
  tracked: boolean
}

// Citations are large, so they're split into a separate chunk and loaded on demand.
let cache: Promise<Citation[]> | null = null
const load = () => (cache ??= import('./data/citations.json').then((m) => m.default as Citation[]))

export function useCitations(): Citation[] | null {
  const [data, setData] = useState<Citation[] | null>(null)
  useEffect(() => {
    let alive = true
    load().then((d) => alive && setData(d))
    return () => {
      alive = false
    }
  }, [])
  return data
}
