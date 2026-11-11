// Regenerates README.md (the linked, categorized paper list) from src/data/*.json.
import { readFileSync, writeFileSync } from 'node:fs'

const papers = JSON.parse(readFileSync('src/data/papers.json', 'utf8'))
const categories = JSON.parse(readFileSync('src/data/categories.json', 'utf8'))

const anchor = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-')
const esc = (s) => s.replace(/\|/g, '\\|').replace(/\s+/g, ' ')
const authors = (a) => (a.length > 3 ? `${a.slice(0, 3).join(', ')} et al.` : a.join(', '))
const date = (p) => (p.datePrecision === 'year' ? p.date.slice(0, 4) : p.date.slice(0, 7))

const years = papers.map((p) => p.date.slice(0, 4)).sort()
let md = `# RWKV Paper Tracker

A curated, categorized list of **${papers.length} research papers** built around the
[RWKV](https://github.com/BlinkDL/RWKV-LM) (Receptance Weighted Key Value) linear-attention architecture,
spanning ${years[0]}–${years.at(-1)}. Papers are included when RWKV is the central architecture or object of study,
not when it only appears as a baseline.

The interactive site (category browser, paper details and publication timeline) is a React + TypeScript app
built by GitHub Actions and served on GitHub Pages.

## Development

\`\`\`bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run readme   # regenerate this README from src/data/papers.json
\`\`\`

Paper data lives in [\`src/data/papers.json\`](src/data/papers.json); categories in
[\`src/data/categories.json\`](src/data/categories.json).

## Categories

| Category | Papers |
| --- | ---: |
`
for (const c of categories) {
  const n = papers.filter((p) => p.category === c.id).length
  md += `| [${c.name}](#${anchor(c.name)}) | ${n} |\n`
}

for (const c of categories) {
  const list = papers.filter((p) => p.category === c.id).sort((a, b) => b.date.localeCompare(a.date))
  md += `\n## ${c.name}\n\n${c.description}\n\n| Date | Paper | Authors | Venue |\n| --- | --- | --- | --- |\n`
  for (const p of list) {
    const links = [`[${esc(p.title)}](${p.url})`]
    if (p.pdf) links.push(`[[pdf]](${p.pdf})`)
    md += `| ${date(p)} | ${links.join(' ')} | ${esc(authors(p.authors))} | ${esc(p.venue || '')} |\n`
  }
}

writeFileSync('README.md', md)
console.log(`README.md written with ${papers.length} papers`)
