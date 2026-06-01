import Spark from '../../components/Spark.jsx'

export default function Slide20() {
  return (
    <section className="light" data-label="Share Cards">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Share</div><div className="kicker">Open Graph · 1200 × 630</div></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '36px' }}>
          <div className="h3" style={{ maxWidth: '1200px' }}>Link previews carry the brand into every feed, DM and Slack.</div>
          <div className="row" style={{ gap: '34px' }}>
            <div style={{ flex: 1, aspectRatio: '1200 / 630', borderRadius: '16px', background: 'var(--pine)', boxShadow: '0 20px 60px rgba(10,30,24,.18)', padding: '54px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
              <div className="lock" style={{ gap: '18px' }}><Spark size={52} color="var(--bone)" /><div className="wm" style={{ fontSize: '44px', color: 'var(--bone)' }}>Lindy</div></div>
              <div className="h3" style={{ color: 'var(--bone)', fontSize: '46px', maxWidth: '80%' }}>Money that gets stronger when markets shake.</div>
              <div className="mono" style={{ color: 'var(--bone)', opacity: '.55', fontSize: '20px' }}>lindyoperation.com</div>
            </div>
            <div style={{ flex: 1, aspectRatio: '1200 / 630', borderRadius: '16px', background: 'var(--bone)', border: '1px solid var(--line)', boxShadow: '0 20px 60px rgba(10,30,24,.1)', padding: '54px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="row between"><div className="mono dim" style={{ fontSize: '20px', letterSpacing: '.14em' }}>BLOG · ANTIFRAGILITY</div><Spark size={40} /></div>
              <div className="h3" style={{ fontSize: '48px', maxWidth: '90%' }}>Why your portfolio should <span className="ember">want</span> volatility.</div>
              <div className="row between"><div className="mono dim" style={{ fontSize: '20px' }}>6 min read</div><div className="wm" style={{ fontSize: '30px' }}>Lindy</div></div>
            </div>
          </div>
        </div>
        <div className="pageno">20</div>
      </div>
    </section>
  )
}
