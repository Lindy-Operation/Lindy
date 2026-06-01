import Spark from '../../components/Spark.jsx'

export default function Slide26() {
  return (
    <section className="ink" data-label="Closing" data-deck-last-visible="">
      <div className="frame">
        <div className="topbar"><div className="kicker">Lindy · Brand Book</div><div className="kicker">v1.0 · 2026</div></div>
        <div className="grow center col" style={{ gap: '46px' }}>
          <Spark size={140} color="var(--bone)" />
          <div className="h1" style={{ textAlign: 'center' }}>Be the <span className="ember">fire.</span></div>
          <div className="lead dim" style={{ maxWidth: '760px', textAlign: 'center' }}>One mark, one family, one calm idea — applied with discipline across every surface.</div>
        </div>
        <div className="topbar"><div className="kicker">hello@lindyoperation.com</div><div className="kicker">lindyoperation.com</div></div>
      </div>
    </section>
  )
}
