import Spark from '../../components/Spark.jsx'

export default function Slide25() {
  return (
    <section className="light" data-label="Goods">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Goods</div><div className="kicker">Apparel · Stickers</div></div>
        <div className="grow row" style={{ gap: '60px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '18px', flex: 'none' }}>
            <div style={{ width: '420px', height: '460px', borderRadius: '20px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 22px 60px rgba(10,30,24,.24)' }}>
              <Spark size={150} color="var(--bone)" />
              <div className="mono" style={{ position: 'absolute', bottom: '30px', color: 'var(--bone)', opacity: '.4', fontSize: '16px', letterSpacing: '.2em' }}>BE THE FIRE</div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '18px', textAlign: 'center' }}>TEE · CHEST PRINT, PINE / BONE</div>
          </div>
          <div className="col grow" style={{ gap: '28px' }}>
            <div className="kicker">Sticker set</div>
            <div className="row" style={{ gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '170px', height: '170px', borderRadius: '50%', background: 'var(--ember)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '6px solid #fff', boxShadow: '0 12px 34px rgba(10,30,24,.18)' }}><Spark size={96} color="#fff" /></div>
              <div style={{ width: '170px', height: '170px', borderRadius: '24px', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '6px solid #fff', boxShadow: '0 12px 34px rgba(10,30,24,.18)' }}><Spark size={90} color="var(--pineDk)" /></div>
              <div style={{ padding: '0 36px', height: '96px', borderRadius: '48px', background: 'var(--pine)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '6px solid #fff', boxShadow: '0 12px 34px rgba(10,30,24,.18)' }}><div className="wm" style={{ color: 'var(--bone)', fontSize: '48px' }}>Lindy</div></div>
              <div style={{ width: '130px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0 8px 16px rgba(10,30,24,.2))' }}><Spark size={118} color="var(--ember)" /></div>
            </div>
            <div className="small dim" style={{ maxWidth: '560px' }}>Die-cut flame, circle, and wordmark pill. Always on a white keyline so the mark reads on any laptop lid.</div>
          </div>
        </div>
        <div className="pageno">25</div>
      </div>
    </section>
  )
}
