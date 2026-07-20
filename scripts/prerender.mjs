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

// 법무 문서 경로(허브 + 언어별 현행본 + 모든 보관본)는 레지스트리에서 생성한다.
// 제품이나 개정 버전이 늘어나도 이 파일은 건드릴 필요가 없다.
const { allLegalRoutes } = await import(
  pathToFileURL(path.resolve(__dirname, '../src/legal/registry.js')).href
)
const ROUTES = ['/', '/brand', '/disclosure', ...allLegalRoutes()]

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
