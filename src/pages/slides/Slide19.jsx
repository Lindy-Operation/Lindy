import Spark from '../../components/Spark.jsx'

export default function Slide19() {
  return (
    <section className="light" data-label="LinkedIn / YouTube">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Social</div><div className="kicker">LinkedIn · YouTube</div></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '44px' }}>
          <div className="col" style={{ gap: '14px' }}>
            <div style={{ height: '300px', borderRadius: '16px', overflow: 'hidden', background: 'var(--pineDk)', position: 'relative', display: 'flex', alignItems: 'center', padding: '0 70px', boxShadow: '0 20px 60px rgba(10,30,24,.18)' }}>
              <Spark size={260} color="#FBFAF610" style={{ position: 'absolute', right: '60px', top: '30px' }} />
              <div className="col" style={{ gap: '14px', zIndex: '1' }}>
                <div className="lock" style={{ gap: '22px' }}><Spark size={64} color="var(--bone)" /><div className="wm" style={{ fontSize: '62px', color: 'var(--bone)' }}>Lindy</div></div>
                <div className="body" style={{ color: 'var(--bone)', opacity: '.7' }}>Antifragile finance, operated by AI.</div>
              </div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '19px' }}>LINKEDIN BANNER · 1584 × 396</div>
          </div>
          <div className="row" style={{ gap: '44px', alignItems: 'flex-end' }}>
            <div className="col" style={{ gap: '14px', flex: 'none' }}>
              <div style={{ width: '760px', height: '215px', borderRadius: '14px', background: 'var(--pine)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '430px', height: '120px', border: '1px dashed #FBFAF655', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px' }}><Spark size={56} color="var(--bone)" /><div className="wm" style={{ fontSize: '50px', color: 'var(--bone)' }}>Lindy</div></div></div>
              </div>
              <div className="mono dimmer" style={{ fontSize: '19px' }}>YOUTUBE CHANNEL ART · 2560 × 1440 · DASHED = TV/MOBILE SAFE AREA</div>
            </div>
            <div className="col grow" style={{ gap: '14px', maxWidth: '330px' }}>
              <div className="kicker">Safe area</div>
              <div className="small dim">Keep the logo inside the 1546 × 423 center safe area — it's the only region visible across TV, desktop and mobile.</div>
            </div>
          </div>
        </div>
        <div className="pageno">19</div>
      </div>
    </section>
  )
}
