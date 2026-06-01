import Spark from '../../components/Spark.jsx'

export default function Slide03() {
  return (
    <section className="pine" data-label="01 Brand">
      <div className="frame">
        <div className="topbar"><div className="kicker">Section 01</div><Spark size={54} /></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '34px' }}>
          <div className="mono" style={{ fontSize: '30px', letterSpacing: '.3em', opacity: '.6' }}>01</div>
          <div className="h1">Brand</div>
          <div className="lead dim" style={{ maxWidth: '920px' }}>The story, the essence, and the single sentence everything else has to serve.</div>
        </div>
        <div className="pageno" style={{ color: 'var(--bone)' }}>03</div>
      </div>
    </section>
  )
}
