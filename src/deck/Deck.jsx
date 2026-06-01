import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Deck.css'

/**
 * Deck — a lean React re-implementation of the brand book's <deck-stage>.
 *
 * Renders a fixed design-size canvas (default 1920×1080) scaled with
 * transform: scale() to fit the viewport and letterboxed on a near-black
 * field — matching the prototype. One slide visible at a time; the rest stay
 * mounted but hidden so their state is preserved.
 *
 * Navigation: ←/PageUp = prev, →/Space/PageDown = next, Home/End = jump,
 * digits build a slide number, and tapping the left/right third of the stage
 * (away from links/buttons) steps prev/next.
 */
export default function Deck({ slides, width = 1920, height = 1080 }) {
  const total = slides.length
  const [index, setIndex] = useState(0)
  const [scale, setScale] = useState(1)
  const [hintVisible, setHintVisible] = useState(true)
  const rootRef = useRef(null)
  const idleTimer = useRef(null)

  const go = useCallback(
    (next) => {
      setIndex((cur) => Math.max(0, Math.min(total - 1, typeof next === 'function' ? next(cur) : next)))
    },
    [total],
  )

  // fit the canvas to the viewport
  useLayoutEffect(() => {
    const fit = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      setScale(Math.min(vw / width, vh / height))
    }
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [width, height])

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          go((i) => i + 1)
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          go((i) => i - 1)
          break
        case 'Home':
          e.preventDefault()
          go(0)
          break
        case 'End':
          e.preventDefault()
          go(total - 1)
          break
        default:
          if (/^[0-9]$/.test(e.key)) {
            const n = parseInt(e.key, 10)
            if (n >= 1 && n <= total) go(n - 1)
          }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, total])

  // fade the hint overlay out after idle
  useEffect(() => {
    const wake = () => {
      setHintVisible(true)
      clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setHintVisible(false), 2600)
    }
    wake()
    window.addEventListener('mousemove', wake)
    window.addEventListener('keydown', wake)
    return () => {
      clearTimeout(idleTimer.current)
      window.removeEventListener('mousemove', wake)
      window.removeEventListener('keydown', wake)
    }
  }, [index])

  // click the left / right third of the stage to navigate
  const onClick = (e) => {
    if (e.target.closest('a,button,input,textarea,select')) return
    const x = e.clientX / window.innerWidth
    if (x < 0.33) go((i) => i - 1)
    else if (x > 0.67) go((i) => i + 1)
  }

  return (
    <div className="deck-root bb" ref={rootRef} onClick={onClick}>
      <div
        className="deck-canvas"
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {slides.map((Slide, i) => (
          <div className="deck-slide" data-active={i === index} key={i} aria-hidden={i !== index}>
            <Slide />
          </div>
        ))}
      </div>

      <div className="deck-hint" data-visible={hintVisible}>
        <span className="mono">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
        <span className="deck-hint-keys mono">← → to navigate</span>
      </div>
    </div>
  )
}
