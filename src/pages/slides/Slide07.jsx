import Spark from '../../components/Spark.jsx'

export default function Slide07() {
  return (
    <section className="light" data-label="The Mark">
      <div className="frame">
        <div className="topbar"><div className="kicker">Logo · Symbol</div><div className="kicker">The Spark</div></div>
        <div className="grow row" style={{ alignItems: 'center', gap: '120px' }}>
          <div className="center" style={{ flex: 'none', width: '620px', height: '620px', background: 'var(--pine)', borderRadius: '40px' }}>
            <Spark size={300} color="var(--bone)" />
          </div>
          <div className="col" style={{ gap: '30px', maxWidth: '640px' }}>
            <div className="h2">The Spark</div>
            <div className="lead">A single tongue of flame, leaning as if pushed — and stronger for it. The updraft cut through its center reads as a rising line.</div>
            <div className="body dim">Disorder is fuel, not threat. The mark holds one idea at every size: energy that compounds. Warm, human, unmistakable.</div>
          </div>
        </div>
        <div className="pageno">07</div>
      </div>
    </section>
  )
}
