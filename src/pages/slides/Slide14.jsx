import Spark from '../../components/Spark.jsx'

export default function Slide14() {
  return (
    <section className="light" data-label="Typography">
      <div className="frame">
        <div className="topbar"><div className="kicker">Type · Geist</div><div className="kicker">One family · geometric grotesk</div></div>
        <div className="grow row" style={{ gap: '90px' }}>
          <div className="col" style={{ flex: 'none', width: '780px', justifyContent: 'center', gap: '30px' }}>
            <div className="wm" style={{ fontSize: '300px', fontWeight: '600' }}>Lindy</div>
            <div className="mono dim" style={{ fontSize: '22px', letterSpacing: '.1em' }}>GEIST SEMIBOLD · −3% TRACKING · TITLE CASE</div>
          </div>
          <div className="col grow" style={{ justifyContent: 'center', gap: '40px' }}>
            <div className="hr"></div>
            <div className="col" style={{ gap: '22px' }}>
              <div className="row between" style={{ alignItems: 'baseline' }}><div style={{ fontSize: '64px', fontWeight: '300' }}>Aa</div><div className="mono dim" style={{ fontSize: '20px' }}>Light · 300</div></div>
              <div className="row between" style={{ alignItems: 'baseline' }}><div style={{ fontSize: '64px', fontWeight: '400' }}>Aa</div><div className="mono dim" style={{ fontSize: '20px' }}>Regular · 400</div></div>
              <div className="row between" style={{ alignItems: 'baseline' }}><div style={{ fontSize: '64px', fontWeight: '500' }}>Aa</div><div className="mono dim" style={{ fontSize: '20px' }}>Medium · 500</div></div>
              <div className="row between" style={{ alignItems: 'baseline' }}><div style={{ fontSize: '64px', fontWeight: '600' }}>Aa</div><div className="mono dim" style={{ fontSize: '20px' }}>SemiBold · 600</div></div>
            </div>
            <div className="hr"></div>
            <div className="col" style={{ gap: '10px' }}>
              <div className="mono" style={{ fontSize: '34px' }}>Geist Mono — 0123456789</div>
              <div className="mono dim" style={{ fontSize: '20px' }}>Labels, figures, code &amp; data. ABCDEFG abcdefg</div>
            </div>
          </div>
        </div>
        <div className="pageno">14</div>
      </div>
    </section>
  )
}
