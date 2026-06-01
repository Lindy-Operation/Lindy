import Spark from '../../components/Spark.jsx'

export default function Slide12() {
  return (
    <section className="light" data-label="Palette">
      <div className="frame">
        <div className="topbar"><div className="kicker">Color · Primary</div><div className="kicker">Navy &amp; warm neutrals</div></div>
        <div className="grow col" style={{ gap: '34px', justifyContent: 'center' }}>
          <div className="h3" style={{ maxWidth: '1200px' }}>Navy leads. Neutrals are warm, never cold grey. A deep, considered navy — never fintech neon.</div>
          <div className="row" style={{ gap: '22px', height: '430px' }}>
            <div className="sw" style={{ flex: '1.4' }}><div className="chip" style={{ background: 'var(--pineDk)' }}></div><div className="meta"><div className="nm">Navy Deep</div><div className="hx">#0F2238</div></div></div>
            <div className="sw" style={{ flex: '1.4' }}><div className="chip" style={{ background: 'var(--pine)' }}></div><div className="meta"><div className="nm">Navy</div><div className="hx">#1B3A5E · primary</div></div></div>
            <div className="sw" style={{ flex: '1' }}><div className="chip" style={{ background: 'var(--ink)' }}></div><div className="meta"><div className="nm">Ink</div><div className="hx">#0E141C</div></div></div>
            <div className="sw" style={{ flex: '1' }}><div className="chip" style={{ background: 'var(--slate)' }}></div><div className="meta"><div className="nm">Slate</div><div className="hx">#46524E</div></div></div>
            <div className="sw" style={{ flex: '1' }}><div className="chip" style={{ background: 'var(--mist)' }}></div><div className="meta"><div className="nm">Mist</div><div className="hx">#9AA39E</div></div></div>
            <div className="sw" style={{ flex: '1' }}><div className="chip" style={{ background: 'var(--paper)' }}></div><div className="meta"><div className="nm">Paper</div><div className="hx">#F3F0E9</div></div></div>
            <div className="sw" style={{ flex: '1' }}><div className="chip" style={{ background: 'var(--bone)' }}></div><div className="meta"><div className="nm">Bone</div><div className="hx">#FBFAF6</div></div></div>
          </div>
        </div>
        <div className="pageno">12</div>
      </div>
    </section>
  )
}
