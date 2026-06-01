import Spark from '../../components/Spark.jsx'

export default function Slide24() {
  return (
    <section className="light" data-label="Deck Template">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Decks</div><div className="kicker">Presentation template</div></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '36px' }}>
          <div className="h3" style={{ maxWidth: '1100px' }}>Internal &amp; investor decks inherit the same grid, type and restraint.</div>
          <div className="row" style={{ gap: '34px' }}>
            <div className="col" style={{ gap: '14px', flex: 1 }}>
              <div style={{ aspectRatio: '16 / 9', borderRadius: '12px', background: 'var(--pine)', boxShadow: '0 16px 44px rgba(10,30,24,.18)', padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="lock" style={{ gap: '14px' }}><Spark size={38} color="var(--bone)" /><div className="wm" style={{ fontSize: '30px', color: 'var(--bone)' }}>Lindy</div></div>
                <div className="col" style={{ gap: '12px' }}><div className="mono" style={{ color: 'var(--bone)', opacity: '.5', fontSize: '16px' }}>SERIES&nbsp;A · 2026</div><div className="h3" style={{ color: 'var(--bone)', fontSize: '44px' }}>The antifragile<br />operator.</div></div>
              </div>
              <div className="mono dimmer" style={{ fontSize: '18px', textAlign: 'center' }}>TITLE</div>
            </div>
            <div className="col" style={{ gap: '14px', flex: 1 }}>
              <div style={{ aspectRatio: '16 / 9', borderRadius: '12px', background: 'var(--bone)', border: '1px solid var(--line)', boxShadow: '0 16px 44px rgba(10,30,24,.1)', padding: '44px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="mono dim" style={{ fontSize: '17px', letterSpacing: '.16em' }}>01 · HOW IT WORKS</div>
                <div className="h3" style={{ fontSize: '34px' }}>Compounding through chaos</div>
                <div className="row grow" style={{ gap: '16px', alignItems: 'stretch' }}>
                  <div style={{ flex: 1, borderLeft: '2px solid var(--ember)', paddingLeft: '14px' }} className="col"><div className="wm" style={{ fontSize: '30px' }}>62k</div><div className="small dim">users</div></div>
                  <div style={{ flex: 1, borderLeft: '2px solid var(--pine)', paddingLeft: '14px' }} className="col"><div className="wm" style={{ fontSize: '30px' }}>18%</div><div className="small dim">avg. uplift</div></div>
                  <div style={{ flex: 1, borderLeft: '2px solid var(--gold)', paddingLeft: '14px' }} className="col"><div className="wm" style={{ fontSize: '30px' }}>₩2.1T</div><div className="small dim">managed</div></div>
                </div>
              </div>
              <div className="mono dimmer" style={{ fontSize: '18px', textAlign: 'center' }}>CONTENT</div>
            </div>
          </div>
        </div>
        <div className="pageno">24</div>
      </div>
    </section>
  )
}
