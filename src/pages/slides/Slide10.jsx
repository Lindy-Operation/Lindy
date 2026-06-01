import Spark from '../../components/Spark.jsx'

export default function Slide10() {
  return (
    <section className="light" data-label="Usage">
      <div className="frame">
        <div className="topbar"><div className="kicker">Logo · Usage</div><div className="kicker">Do &amp; Don't</div></div>
        <div className="grow row" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '22px', flex: 'none' }}>
            <div className="kicker"><span className="tag" style={{ background: '#1f8a5b22', color: '#1f8a5b' }}>Correct</span></div>
            <div className="row" style={{ gap: '22px' }}>
              <div className="center" style={{ width: '188px', height: '188px', borderRadius: '24px', background: 'var(--bone)', border: '1px solid var(--line)' }}><Spark size={96} /></div>
              <div className="center" style={{ width: '188px', height: '188px', borderRadius: '24px', background: 'var(--pine)' }}><Spark size={96} color="var(--bone)" /></div>
              <div className="center" style={{ width: '188px', height: '188px', borderRadius: '24px', background: '#000' }}><Spark size={96} color="#fff" /></div>
            </div>
            <div className="small dim" style={{ maxWidth: '600px' }}>Navy on light, bone on navy, mono on black. Keep full contrast. Let it breathe.</div>
          </div>
          <div className="col grow" style={{ gap: '22px' }}>
            <div className="kicker"><span className="tag" style={{ background: '#ec5a2a22', color: 'var(--ember)' }}>Never</span></div>
            <div className="row" style={{ gap: '18px', flexWrap: 'wrap', maxWidth: '760px' }}>
              <div className="col center" style={{ gap: '10px' }}><div className="center" style={{ width: '152px', height: '152px', borderRadius: '18px', background: 'var(--bone)', border: '1px solid var(--line)' }}><div className="mark" style={{ width: '110px', height: '64px' }}><svg viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="currentColor" fillRule="evenodd" d="M54 14 C 50 33 70 41 70 60 A 22 22 0 0 1 26 60 C 26 47 33 41 39 31 C 40 41 45 46 50 47 C 52 38 50 25 54 14 Z M50 47 C 44 50 41 56 44 63 C 38 60 36 53 39 46 C 43 39 49 39 50 47 Z" /></svg></div></div><div className="mono dimmer" style={{ fontSize: '16px' }}>stretch</div></div>
              <div className="col center" style={{ gap: '10px' }}><div className="center" style={{ width: '152px', height: '152px', borderRadius: '18px', background: 'var(--bone)', border: '1px solid var(--line)' }}><Spark size={80} color="#8e44ad" /></div><div className="mono dimmer" style={{ fontSize: '16px' }}>recolor</div></div>
              <div className="col center" style={{ gap: '10px' }}><div className="center" style={{ width: '152px', height: '152px', borderRadius: '18px', background: 'var(--bone)', border: '1px solid var(--line)' }}><Spark size={80} style={{ transform: 'rotate(28deg)' }} /></div><div className="mono dimmer" style={{ fontSize: '16px' }}>rotate</div></div>
              <div className="col center" style={{ gap: '10px' }}><div className="center" style={{ width: '152px', height: '152px', borderRadius: '18px', background: '#cfcabd' }}><Spark size={80} color="#cfcabd" style={{ filter: 'drop-shadow(3px 5px 3px #0007)' }} /></div><div className="mono dimmer" style={{ fontSize: '16px' }}>effects</div></div>
            </div>
          </div>
        </div>
        <div className="pageno">10</div>
      </div>
    </section>
  )
}
