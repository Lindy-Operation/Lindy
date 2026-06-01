import Spark from '../../components/Spark.jsx'

export default function Slide21() {
  return (
    <section className="light" data-label="Landing Page">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Web</div><div className="kicker">Landing page · preview</div></div>
        <div className="grow center">
          <div className="browser" style={{ width: '1480px' }}>
            <div style={{ height: '54px', background: '#eceae3', display: 'flex', alignItems: 'center', padding: '0 22px', gap: '10px' }}>
              <div className="dot" style={{ background: '#e2604f' }}></div><div className="dot" style={{ background: '#e6b34a' }}></div><div className="dot" style={{ background: '#5fb47e' }}></div>
              <div style={{ marginLeft: '22px', background: '#fff', borderRadius: '8px', height: '30px', flex: 1, maxWidth: '520px', display: 'flex', alignItems: 'center', padding: '0 16px' }} className="mono dim"><span style={{ fontSize: '17px' }}>lindyoperation.com</span></div>
            </div>
            <div style={{ background: 'var(--paper)' }}>
              {/* nav */}
              <div className="row between" style={{ alignItems: 'center', padding: '26px 56px' }}>
                <div className="lock" style={{ gap: '14px' }}><Spark size={38} /><div className="wm" style={{ fontSize: '34px' }}>Lindy</div></div>
                <div className="row" style={{ gap: '34px', alignItems: 'center' }}><span className="small dim">Product</span><span className="small dim">Pricing</span><span className="small dim">Story</span><div className="tag" style={{ background: 'var(--pine)', color: 'var(--bone)', fontSize: '15px' }}>Get started</div></div>
              </div>
              {/* hero */}
              <div className="row" style={{ padding: '54px 56px 64px', gap: '56px', alignItems: 'center' }}>
                <div className="col" style={{ gap: '28px', flex: 1 }}>
                  <div className="tag" style={{ background: '#ec5a2a18', color: 'var(--ember)', width: 'fit-content', fontSize: '15px' }}>🔥 Be the fire</div>
                  <div style={{ fontSize: '78px', fontWeight: 600, letterSpacing: '-.04em', lineHeight: '.98' }}>Money that gets <span className="ember">stronger</span> when markets shake.</div>
                  <div className="lead dim" style={{ fontSize: '27px', maxWidth: '560px' }}>AI that operates your wealth &amp; cashflow — compounding quietly through every shock.</div>
                  <div className="row" style={{ gap: '16px' }}><div className="tag" style={{ background: 'var(--pine)', color: 'var(--bone)', fontSize: '18px', padding: '14px 26px' }}>Open an account</div><div className="tag" style={{ background: 'transparent', border: '1px solid var(--line)', color: 'var(--ink)', fontSize: '18px', padding: '14px 26px' }}>See how it works</div></div>
                </div>
                <div style={{ flex: 1, borderRadius: '22px', overflow: 'hidden', background: 'var(--pine)', height: '420px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Spark size={200} color="#FBFAF618" style={{ position: 'absolute', top: '30px', right: '30px' }} />
                  <div className="col" style={{ gap: '18px', width: '74%', zIndex: 1 }}>
                    <div style={{ background: '#FBFAF610', border: '1px solid #FBFAF61f', borderRadius: '14px', padding: '24px' }} className="col">
                      <div className="mono" style={{ color: 'var(--bone)', opacity: '.5', fontSize: '16px' }}>TOTAL BALANCE</div>
                      <div className="wm" style={{ color: 'var(--bone)', fontSize: '46px', letterSpacing: '-.03em' }}>₩ 248,910,400</div>
                      <div className="mono" style={{ color: 'var(--gold)', fontSize: '18px' }}>▲ +18.4% through volatility</div>
                    </div>
                    <div className="row" style={{ gap: '14px' }}><div style={{ flex: 1, background: '#FBFAF610', borderRadius: '12px', height: '64px' }}></div><div style={{ flex: 1, background: '#FBFAF610', borderRadius: '12px', height: '64px' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pageno">21</div>
      </div>
    </section>
  )
}
