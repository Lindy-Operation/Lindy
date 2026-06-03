// Post-build prerender: boot a static server over dist/, drive a headless
// browser through each route, and write the fully-rendered HTML back to disk.
// Crawlers (esp. Naver's Yeti, which does not execute JS) then receive real
// content instead of an empty <div id="root">. React hydrates on the client.
import http from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')
const ROUTES = ['/', '/brand', '/disclosure']
const PORT = 41888

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ico': 'image/x-icon',
}

// Minimal static server with SPA fallback to index.html for extension-less paths.
const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(req.url.split('?')[0])
    let filePath = path.join(dist, urlPath)
    if (urlPath === '/' || !path.extname(filePath) || !existsSync(filePath)) {
      filePath = path.join(dist, 'index.html')
    }
    const data = await readFile(filePath)
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' })
    res.end(data)
  } catch (err) {
    res.writeHead(500)
    res.end(String(err))
  }
})

await new Promise((resolve) => server.listen(PORT, resolve))

try {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage()
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 })
      // Ensure React has actually rendered into #root before snapshotting.
      await page.waitForFunction(
        () => document.getElementById('root')?.childElementCount > 0,
        { timeout: 15000 },
      )
      const html = await page.content()
      const outDir = route === '/' ? dist : path.join(dist, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), html, 'utf8')
      console.log(`✓ prerendered ${route} -> ${path.relative(dist, path.join(outDir, 'index.html'))}`)
      await page.close()
    }
  } finally {
    await browser.close()
  }
} catch (err) {
  // Never fail the deploy on a prerender hiccup — ship the SPA and surface the
  // error loudly so a broken prerender environment is visible in build logs.
  console.warn('\n⚠️  PRERENDER FAILED — shipping client-rendered SPA instead.')
  console.warn(err?.stack || String(err))
} finally {
  server.close()
}
