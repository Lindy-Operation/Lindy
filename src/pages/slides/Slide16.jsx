import Spark from '../../components/Spark.jsx'

export default function Slide16() {
  return (
    <section className="light" data-label="App Icon">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · App</div><div className="kicker">Icon · Favicon · Splash</div></div>
        <div className="grow row" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '34px', flex: 'none' }}>
            <div style={{ width: '300px', height: '300px', borderRadius: '68px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 24px 60px rgba(10,30,24,.28)' }}>
              <Spark size={170} color="var(--bone)" />
            </div>
            <div className="row" style={{ gap: '20px', alignItems: 'flex-end' }}>
              <div className="col center" style={{ gap: '12px' }}><div style={{ width: '64px', height: '64px', borderRadius: '15px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spark size={38} color="var(--bone)" /></div><div className="mono dimmer" style={{ fontSize: '17px' }}>64</div></div>
              <div className="col center" style={{ gap: '12px' }}><div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spark size={19} color="var(--bone)" /></div><div className="mono dimmer" style={{ fontSize: '17px' }}>32</div></div>
              <div className="col center" style={{ gap: '12px' }}><div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Spark size={10} color="var(--bone)" /></div><div className="mono dimmer" style={{ fontSize: '17px' }}>16</div></div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '18px', letterSpacing: '.08em' }}>iOS / ANDROID · FAVICON</div>
          </div>

          <div className="col" style={{ gap: '18px', flex: 'none' }}>
            <div style={{ width: '340px', height: '710px', borderRadius: '48px', background: '#0a0a0a', padding: '13px', boxShadow: '0 30px 80px rgba(10,30,24,.3)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '36px', background: 'var(--pine)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px', position: 'relative', overflow: 'hidden' }}>
                <Spark size={120} color="var(--bone)" />
                <div className="wm" style={{ fontSize: '60px', color: 'var(--bone)' }}>Lindy</div>
                <div style={{ position: 'absolute', bottom: '46px', width: '120px', height: '4px', borderRadius: '2px', background: '#FBFAF633', overflow: 'hidden' }}><div style={{ width: '46%', height: '100%', background: 'var(--ember)' }}></div></div>
              </div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '18px', textAlign: 'center', letterSpacing: '.08em' }}>SPLASH / LOADING</div>
          </div>

          <div className="col grow" style={{ gap: '18px', justifyContent: 'center', maxWidth: '380px' }}>
            <div className="kicker">Onboarding</div>
            <div className="body">The flame breathes on launch — a single slow pulse from 90% to 100% scale. No spinners; the mark <span className="ember">is</span> the loading state. Wordmark fades up after.</div>
            <div className="hr"></div>
            <div className="small dim">Icon: bone flame on Navy&nbsp;Deep, 22% corner radius. Never the wordmark inside the icon tile.</div>
          </div>
        </div>
        <div className="pageno">16</div>
      </div>
    </section>
  )
}
