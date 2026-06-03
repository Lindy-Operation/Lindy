import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Agentation } from 'agentation'
import './styles/global.css'
import AppRoutes from './AppRoutes.jsx'

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      {/* Visual feedback overlay for AI coding agents — dev only */}
      {import.meta.env.DEV && <Agentation />}
    </BrowserRouter>
  </StrictMode>
)

const root = document.getElementById('root')
// Prerendered markup present (production build) → hydrate; else render fresh.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
