import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Agentation } from 'agentation'
import './styles/global.css'
import Landing from './pages/Landing.jsx'
import BrandBook from './pages/BrandBook.jsx'
import Disclosure from './pages/Disclosure.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/brand" element={<BrandBook />} />
        <Route path="/disclosure" element={<Disclosure />} />
      </Routes>
      {/* Visual feedback overlay for AI coding agents — dev only */}
      {import.meta.env.DEV && <Agentation />}
    </BrowserRouter>
  </StrictMode>,
)
