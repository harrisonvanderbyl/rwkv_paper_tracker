import papersJson from './data/papers.json'
import categoriesJson from './data/categories.json'

export interface Organization {
  name: string
  country: string | null
}

export interface Paper {
  id: string
  title: string
  authors: string[]
  date: string
  datePrecision: 'day' | 'year'
  venue: string
  category: string
  url: string
  pdf: string | null
  arxiv: string | null
  doi: string | null
  abstract: string
  rwkvVersions: string[]
  organizations: Organization[]
  citedBy: number
}

export interface Category {
  id: string
  name: string
  color: string
  description: string
}

export const papers = papersJson as Paper[]
export const categories = categoriesJson as Category[]
export const categoryById = new Map(categories.map((c) => [c.id, c]))
