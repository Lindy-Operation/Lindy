import Spark from '../../components/Spark.jsx'

export default function Slide11() {
  return (
    <section className="pine" data-label="03 Color &amp; Type">
      <div className="frame">
        <div className="topbar"><div className="kicker">Section 03</div><Spark size={54} /></div>
        <div className="grow col" style={{ justifyContent: 'center', gap: '34px' }}>
          <div className="mono" style={{ fontSize: '30px', letterSpacing: '.3em', opacity: '.6' }}>03</div>
          <div className="h1">Color &amp; Type</div>
          <div className="lead dim" style={{ maxWidth: '980px' }}>Deep navy and warm neutrals carry trust. One family of type. Two accents, used sparingly.</div>
        </div>
        <div className="pageno" style={{ color: 'var(--bone)' }}>11</div>
      </div>
    </section>
  )
}
