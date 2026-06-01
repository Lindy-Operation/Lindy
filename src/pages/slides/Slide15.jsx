import Spark from '../../components/Spark.jsx'

export default function Slide15() {
  return (
    <section className="pine" data-label="04 Applications">
      <div className="frame">
        <div className="topbar"><div className="kicker">Section 04</div><Spark size={54} /></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '34px' }}>
          <div className="mono" style={{ fontSize: '30px', letterSpacing: '.3em', opacity: '.6' }}>04</div>
          <div className="h1">Applications</div>
          <div className="lead dim" style={{ maxWidth: '980px' }}>App, social, web, print &amp; goods — the system in the wild. One mark, many surfaces, the same calm energy.</div>
        </div>
        <div className="pageno" style={{ color: 'var(--bone)' }}>15</div>
      </div>
    </section>
  )
}
