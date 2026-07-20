import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import BrandBook from './pages/BrandBook.jsx'
import Disclosure from './pages/Disclosure.jsx'
import Legal from './pages/Legal.jsx'
import LegalDoc from './pages/LegalDoc.jsx'

// Shared route table — rendered by BrowserRouter on the client (main.jsx)
// and by StaticRouter on the server (entry-server.jsx) for prerendering.
//
// 법무 문서는 한국어를 기본 경로로 두고 영어는 /en 을 덧붙인다. 보관본은 /v/{시행일}.
// 실제 생성되는 경로 목록은 src/legal/registry.js 의 allLegalRoutes()가 만든다(프리렌더가 사용).
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/brand" element={<BrandBook />} />
      <Route path="/disclosure" element={<Disclosure />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/legal/:product/:kind" element={<LegalDoc lang="ko" />} />
      <Route path="/legal/:product/:kind/en" element={<LegalDoc lang="en" />} />
      <Route path="/legal/:product/:kind/v/:effective" element={<LegalDoc lang="ko" />} />
      <Route path="/legal/:product/:kind/en/v/:effective" element={<LegalDoc lang="en" />} />
    </Routes>
  )
}
