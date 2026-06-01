import Spark from '../../components/Spark.jsx'

export default function Slide06() {
  return (
    <section className="pine" data-label="02 Logo">
      <div className="frame">
        <div className="topbar"><div className="kicker">Section 02</div><Spark size={54} /></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '34px' }}>
          <div className="mono" style={{ fontSize: '30px', letterSpacing: '.3em', opacity: '.6' }}>02</div>
          <div className="h1">Logo</div>
          <div className="lead dim" style={{ maxWidth: '920px' }}>A minimal flame that doubles as a rising spark — fire that grows with the wind.</div>
        </div>
        <div className="pageno" style={{ color: 'var(--bone)' }}>06</div>
      </div>
    </section>
  )
}
