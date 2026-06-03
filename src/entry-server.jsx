import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import AppRoutes from './AppRoutes.jsx'

// Server entry used at build time to prerender each route to static HTML.
// No browser, no DOM — pure Node, so it runs reliably in any CI/build env.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}
