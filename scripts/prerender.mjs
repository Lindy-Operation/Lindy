// Browserless prerender: render each route to static HTML with React's
// server renderer and inject it into the built index.html shell. Crawlers
// (esp. Naver's Yeti, which does not execute JS) then receive real content
// instead of an empty <div id="root">. React hydrates on the client.
//
// Pure Node — no headless browser — so it runs reliably in any build env.
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')
const ssrEntry = path.resolve(__dirname, '../dist-ssr/entry-server.js')
const ROUTES = ['/', '/brand', '/disclosure']

const { render } = await import(pathToFileURL(ssrEntry).href)
const template = await readFile(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}

for (const route of ROUTES) {
  const appHtml = render(route)
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const outDir = route === '/' ? dist : path.join(dist, route)
  await mkdir(outDir, { recursive: true })
  await writeFile(path.join(outDir, 'index.html'), html, 'utf8')
  console.log(`✓ prerendered ${route} -> ${path.relative(dist, path.join(outDir, 'index.html'))}`)
}
