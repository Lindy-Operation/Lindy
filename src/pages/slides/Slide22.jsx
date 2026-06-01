import Spark from '../../components/Spark.jsx'

export default function Slide22() {
  return (
    <section className="light" data-label="Stationery">
      <div className="frame">
        <div className="topbar"><div className="kicker">Application · Print</div><div className="kicker">Business card · Letterhead</div></div>
        <div className="grow row" style={{ gap: '70px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '26px', flex: 'none' }}>
            <div className="row" style={{ gap: '26px' }}>
              <div style={{ width: '380px', height: '230px', borderRadius: '14px', background: 'var(--pine)', boxShadow: '0 18px 50px rgba(10,30,24,.22)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Spark size={52} color="var(--bone)" />
                <div className="col" style={{ gap: '3px' }}><div className="body" style={{ color: 'var(--bone)', fontWeight: 600 }}>Daehun Lee</div><div className="small" style={{ color: 'var(--bone)', opacity: '.6' }}>Head of Operations</div></div>
              </div>
              <div style={{ width: '380px', height: '230px', borderRadius: '14px', background: 'var(--bone)', border: '1px solid var(--line)', boxShadow: '0 18px 50px rgba(10,30,24,.12)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="wm" style={{ fontSize: '44px' }}>Lindy</div>
                <div className="col mono dim" style={{ gap: '4px', fontSize: '16px' }}><div>danny@lindyoperation.com</div><div>+82 2 1234 5678</div></div>
              </div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '18px' }}>BUSINESS CARD · 90 × 54 MM · GOLD FOIL OPTION ON WORDMARK</div>
          </div>
          <div className="col grow" style={{ gap: '14px', alignItems: 'center' }}>
            <div style={{ width: '340px', height: '454px', background: '#fff', borderRadius: '6px', boxShadow: '0 18px 50px rgba(10,30,24,.14)', padding: '38px', display: 'flex', flexDirection: 'column' }}>
              <div className="row between" style={{ alignItems: 'flex-start' }}><div className="lock" style={{ gap: '12px' }}><Spark size={34} /><div className="wm" style={{ fontSize: '28px' }}>Lindy</div></div><div className="mono dimmer" style={{ fontSize: '13px', textAlign: 'right' }}>LINDY OPERATION INC.</div></div>
              <div style={{ marginTop: '42px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ height: '9px', width: '60%', background: '#0e171412', borderRadius: '3px' }}></div>
                <div style={{ height: '9px', width: '100%', background: '#0e171410', borderRadius: '3px' }}></div>
                <div style={{ height: '9px', width: '100%', background: '#0e171410', borderRadius: '3px' }}></div>
                <div style={{ height: '9px', width: '88%', background: '#0e171410', borderRadius: '3px' }}></div>
                <div style={{ height: '9px', width: '94%', background: '#0e171410', borderRadius: '3px' }}></div>
              </div>
              <div style={{ marginTop: 'auto', height: '3px', width: '46px', background: 'var(--ember)' }}></div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '18px' }}>LETTERHEAD · A4</div>
          </div>
        </div>
        <div className="pageno">22</div>
      </div>
    </section>
  )
}
