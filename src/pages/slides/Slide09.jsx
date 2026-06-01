import Spark from '../../components/Spark.jsx'

export default function Slide09() {
  return (
    <section className="light" data-label="Lockups">
      <div className="frame">
        <div className="topbar"><div className="kicker">Logo · Lockups</div><div className="kicker">Horizontal · Stacked · Symbol</div></div>
        <div className="grow col" style={{ justifyContent: 'space-around' }}>
          <div className="row between" style={{ alignItems: 'center' }}>
            <div className="lock" style={{ gap: '0px' }}>
              <Spark size={134} />
              <div className="col" style={{ gap: '8px', marginLeft: '-18px' }}>
                <div className="wm" style={{ fontSize: '100px', fontFamily: 'var(--sans)' }}>Lindy</div>
                <div className="sub" style={{ fontSize: '18px', opacity: '0.5' }}>Operation</div>
              </div>
            </div>
            <div className="mono dimmer" style={{ fontSize: '21px' }}>Primary · horizontal</div>
          </div>
          <div className="hr"></div>
          <div className="row between" style={{ alignItems: 'center' }}>
            <div className="lockstack" style={{ gap: '16px' }}>
              <Spark size={104} />
              <div className="col center" style={{ gap: '6px' }}>
                <div className="wm" style={{ fontSize: '70px' }}>Lindy</div>
                <div className="sub" style={{ fontSize: '15px', opacity: '.5' }}>Operation</div>
              </div>
            </div>
            <div className="lock" style={{ gap: '8px' }}>
              <Spark size={72} />
              <div className="wm" style={{ fontSize: '60px' }}>Lindy</div>
            </div>
            <Spark size={96} />
            <div className="mono dimmer" style={{ fontSize: '21px' }}>Stacked · compact · symbol</div>
          </div>
        </div>
        <div className="pageno">09</div>
      </div>
    </section>
  )
}
