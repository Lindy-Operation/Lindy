const { join } = require('path')

// Keep Chromium inside node_modules so Vercel's dependency cache preserves it
// between builds (the default ~/.cache/puppeteer is NOT cached by Vercel).
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
}
