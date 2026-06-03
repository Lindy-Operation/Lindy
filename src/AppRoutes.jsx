import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import BrandBook from './pages/BrandBook.jsx'
import Disclosure from './pages/Disclosure.jsx'

// Shared route table — rendered by BrowserRouter on the client (main.jsx)
// and by StaticRouter on the server (entry-server.jsx) for prerendering.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/brand" element={<BrandBook />} />
      <Route path="/disclosure" element={<Disclosure />} />
    </Routes>
  )
}
