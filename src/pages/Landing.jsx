import { Link } from 'react-router-dom'
import Spark from '../components/Spark.jsx'
import './Landing.css'

// endurance bars — survival begets survival (the Lindy curve)
const TICKS = [12, 16, 15, 22, 26, 24, 33, 40, 38, 50, 62, 60, 78, 96, 100]

// smooth exponential curve drawn over the bars (e^kt, normalised to the box)
const CURVE = (() => {
  const K = 3.4
  const N = 64
  const denom = Math.exp(K) - 1
  let d = ''
  for (let i = 0; i <= N; i++) {
    const t = i / N
    const v = (Math.exp(K * t) - 1) / denom // 0 → 1
    const x = (t * 100).toFixed(2)
    const y = (100 - v * 100).toFixed(2) // SVG y is inverted
    d += `${i === 0 ? 'M' : 'L'}${x} ${y} `
  }
  return d.trim()
})()

export default function Landing() {
  return (
    <div className="lp">
      <div className="lp-glow" aria-hidden="true" />
      <div className="lp-grain" aria-hidden="true" />

      {/* ============ NAV ============ */}
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top">
            <Spark className="glow" />
            <span className="name">Lindy</span>
          </a>
          <nav className="nav-links">
            <Link className="lnk" to="/brand">Brand</Link>
            <a className="nav-cta" href="#contact">Get in touch</a>
          </nav>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow rise d1">Lindy Operation — a cashflow company · Est. 2026</div>
            <h1>
              <span className="line rise d2">Be the fire</span>
              <span className="line rise d3">the wind <span className="ember ital">can't</span></span>
              <span className="line rise d4">blow out.</span>
            </h1>
            <p className="lead rise d5">
              A portfolio of durable businesses — operated for cash, held for the
              long run. The longer a thing lasts, the longer it will last.
            </p>
          </div>
          <Spark className="glow hero-mark rise d3" />
        </div>
      </section>

      {/* ============ ENDURANCE ============ */}
      <section className="band" id="why">
        <div className="wrap">
          <div className="endure">
            <div>
              <h2>The longer it lasts,<br />the longer it <span className="ital ember">will</span> last.</h2>
              <p>
                We don't chase the new. We compound the durable — and the curve only
                steepens with time.
              </p>
            </div>
            <div>
              <div className="ticks-wrap">
                <div className="ticks">
                  {TICKS.map((h, i) => (
                    <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }} />
                  ))}
                </div>
                <svg className="ticks-curve" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={CURVE} fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="scale-row">
                <span>2026</span>
                <span>time →</span>
                <span>∞</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CLOSING ============ */}
      <section className="close" id="contact">
        <div className="wrap">
          <Spark className="glow" />
          <h2>Be the <span className="ember ital">fire.</span></h2>
          <a className="mail" href="mailto:danny@lindyoperation.com">danny@lindyoperation.com</a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="wrap">
          <div className="fbrand">
            <Spark />
            <span className="name">Lindy</span>
          </div>
          <div className="fmeta">
            <span>© 2026 Lindy Operation Inc.</span>
            <span className="fdot">·</span>
            <span>Representative: Daehun Lee</span>
            <span className="fdot">·</span>
            <span>Business Registration No. 193-87-03843</span>
            <span className="fdot">·</span>
            <Link to="/disclosure">전자공시</Link>
            <span className="fdot">·</span>
            <a href="mailto:danny@lindyoperation.com">danny@lindyoperation.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
