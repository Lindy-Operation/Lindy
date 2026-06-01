import Spark from '../../components/Spark.jsx'

export default function Slide23() {
  return (
    <section className="light" data-label="Email Signature">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Email</div><div className="kicker">Signature</div></div>
        <div className="grow row" style={{ gap: '90px', alignItems: 'center' }}>
          <div style={{ flex: 'none', width: '720px', background: '#fff', borderRadius: '18px', boxShadow: '0 22px 60px rgba(10,30,24,.14)', padding: '48px' }}>
            <div className="col" style={{ gap: '6px', marginBottom: '26px' }}><div className="body dim">Best,</div><div className="h3" style={{ fontSize: '38px' }}>Daehun Lee</div></div>
            <div className="row" style={{ gap: '28px', alignItems: 'center' }}>
              <div style={{ width: '78px', height: '78px', borderRadius: '16px', background: 'var(--pineDk)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Spark size={46} color="var(--bone)" /></div>
              <div style={{ width: '1px', height: '64px', background: 'var(--line)' }}></div>
              <div className="col" style={{ gap: '9px' }}>
                <div className="body" style={{ fontWeight: 600 }}>Head of Operations · <span className="wm" style={{ fontSize: '25px' }}>Lindy</span></div>
                <div className="mono dim" style={{ fontSize: '17px', whiteSpace: 'nowrap' }}>danny@lindyoperation.com&nbsp;·&nbsp;+82 2 1234 5678</div>
                <div className="mono" style={{ fontSize: '17px', color: 'var(--ember)' }}>lindyoperation.com</div>
              </div>
            </div>
          </div>
          <div className="col grow" style={{ gap: '18px', maxWidth: '420px' }}>
            <div className="kicker">Rules</div>
            <div className="body">One mark, one rule line, one accent link. No banners, no quotes, no social-icon clutter. Name in Geist SemiBold; everything else regular. Signature stays under 90px tall.</div>
          </div>
        </div>
        <div className="pageno">23</div>
      </div>
    </section>
  )
}
