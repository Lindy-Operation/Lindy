import Spark from '../../components/Spark.jsx'

export default function Slide01() {
  return (
    <section className="ink" data-label="Cover">
      <div className="frame">
        <div className="topbar">
          <div className="kicker">Brand Book</div>
          <div className="kicker">Identity System · v1.0</div>
        </div>
        <div className="grow center col" style={{ gap: '54px' }}>
          <Spark size={230} />
          <div className="wm" style={{ fontSize: '188px' }}>Lindy</div>
          <div className="sub" style={{ fontSize: '27px', opacity: '.62' }}>Operation</div>
        </div>
        <div className="topbar">
          <div className="kicker" style={{ fontFamily: 'Geist', fontWeight: '400' }}>Lindy Operation Inc.</div>
          <div className="kicker">SINCE 2026</div>
        </div>
      </div>
    </section>
  )
}
