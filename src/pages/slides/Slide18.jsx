import Spark from '../../components/Spark.jsx'

export default function Slide18() {
  return (
    <section className="light" data-label="Instagram">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Social</div><div className="kicker">Instagram</div></div>
        <div className="grow row" style={{ gap: '80px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '26px', flex: 'none', width: '430px' }}>
            <div className="row" style={{ gap: '30px', alignItems: 'center' }}>
              <div style={{ width: '128px', height: '128px', borderRadius: '50%', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Spark size={74} color="var(--bone)" /></div>
              <div className="col" style={{ gap: '18px' }}>
                <div className="row mono" style={{ gap: '28px', whiteSpace: 'nowrap', fontSize: '19px' }}><div><b>248</b> <span className="dim">posts</span></div><div><b>62.1k</b> <span className="dim">followers</span></div></div>
                <div className="row" style={{ gap: '14px' }}><div className="tag" style={{ background: 'var(--pine)', color: 'var(--bone)' }}>Follow</div><div className="tag" style={{ background: '#0e171410', color: 'var(--ink)' }}>Message</div></div>
              </div>
            </div>
            <div className="col" style={{ gap: '4px' }}>
              <div className="body" style={{ fontWeight: '600' }}>Lindy · Operation</div>
              <div className="body dim">AI wealth &amp; cashflow. Be the fire. 🔥</div>
              <div className="body" style={{ color: 'var(--ember)' }}>lindyoperation.com</div>
            </div>
          </div>
          <div className="col grow" style={{ gap: '16px' }}>
            <div className="row" style={{ gap: '16px' }}>
              <div className="center" style={{ aspectRatio: '1', flex: '1', borderRadius: '14px', background: 'var(--pine)' }}><Spark size={96} color="var(--bone)" /></div>
              <div style={{ aspectRatio: '1', flex: '1', borderRadius: '14px', background: 'var(--ember)', display: 'flex', alignItems: 'flex-end', padding: '24px' }}><div className="h3" style={{ color: '#fff', fontSize: '34px' }}>Be the<br />fire.</div></div>
              <div style={{ aspectRatio: '1', flex: '1', borderRadius: '14px', background: 'var(--paper)', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}><div className="mono dim" style={{ fontSize: '18px' }}>LINDY EFFECT</div><div className="h3" style={{ fontSize: '30px' }}>+18.4%<br /><span className="dim" style={{ fontSize: '20px', fontWeight: '400' }}>vs. volatility</span></div></div>
            </div>
            <div className="row" style={{ gap: '16px' }}>
              <div style={{ aspectRatio: '1', flex: '1', borderRadius: '14px', background: 'var(--gold)', display: 'flex', alignItems: 'flex-end', padding: '24px' }}><div className="mono" style={{ color: 'var(--pineDk)', fontSize: '20px', letterSpacing: '.06em' }}>PREMIUM</div></div>
              <div className="center" style={{ aspectRatio: '1', flex: '1', borderRadius: '14px', background: 'var(--pineDk)' }}><div className="wm" style={{ color: 'var(--bone)', fontSize: '44px' }}>Lindy</div></div>
              <div className="ph" style={{ aspectRatio: '1', flex: '1', borderRadius: '14px' }}><div className="pl">team photo</div></div>
            </div>
          </div>
        </div>
        <div className="pageno">18</div>
      </div>
    </section>
  )
}
