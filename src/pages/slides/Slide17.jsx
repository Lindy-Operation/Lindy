import Spark from '../../components/Spark.jsx'

export default function Slide17() {
  return (
    <section className="light" data-label="X Header">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Social</div><div className="kicker">X / Twitter</div></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '40px' }}>
          <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 24px 70px rgba(10,30,24,.2)' }}>
            <div style={{ height: '430px', background: 'var(--pine)', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 90px', overflow: 'hidden' }}>
              <Spark size={330} color="#FBFAF614" style={{ position: 'absolute', right: '-40px', top: '60px' }} />
              <div className="col" style={{ gap: '18px', zIndex: '1' }}>
                <div className="wm" style={{ fontSize: '96px', color: 'var(--bone)' }}>Lindy</div>
                <div className="lead" style={{ color: 'var(--bone)', opacity: '.82', maxWidth: '760px' }}>AI that compounds. Wealth &amp; cashflow that grows stronger with volatility.</div>
              </div>
            </div>
            {/* avatar overlap */}
            <div style={{ position: 'absolute', left: '80px', bottom: '-2px', width: '150px', height: '150px', borderRadius: '50%', background: 'var(--pineDk)', border: '7px solid var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Spark size={84} color="var(--bone)" />
            </div>
            <div style={{ height: '96px', background: '#fff' }}></div>
          </div>
          <div className="row between"><div className="mono dimmer" style={{ fontSize: '20px' }}>HEADER 1500 × 500 · AVATAR 400 × 400</div><div className="mono dimmer" style={{ fontSize: '20px' }}>@lindyoperation</div></div>
        </div>
        <div className="pageno">17</div>
      </div>
    </section>
  )
}
