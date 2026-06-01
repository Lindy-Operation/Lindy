import Spark from '../../components/Spark.jsx'

export default function Slide13() {
  return (
    <section className="light" data-label="Accents">
      <div className="frame">
        <div className="topbar"><div className="kicker">Color · Accents</div><div className="kicker">Two sparks · used at ~5%</div></div>
        <div className="grow row" style={{ gap: '40px', alignItems: 'stretch', paddingTop: '8px' }}>
          <div className="col grow" style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <div style={{ background: 'var(--ember)', height: '300px', display: 'flex', alignItems: 'flex-end', padding: '30px' }}>
              <Spark size={92} color="#fff" style={{ opacity: '.92' }} />
            </div>
            <div className="col" style={{ gap: '14px', padding: '34px', background: '#fff', flex: '1' }}>
              <div className="row between" style={{ alignItems: 'baseline' }}><div className="h3">Ember</div><div className="mono dim" style={{ fontSize: '22px' }}>#EC5A2A</div></div>
              <div className="body dim">The fire. Energy, momentum, the live moment. CTAs, highlights, the single word that matters in a sentence. Never as a background wash.</div>
            </div>
          </div>
          <div className="col grow" style={{ borderRadius: '22px', overflow: 'hidden', border: '1px solid var(--line)' }}>
            <div style={{ background: 'var(--gold)', height: '300px', display: 'flex', alignItems: 'flex-end', padding: '30px' }}>
              <Spark size={92} color="var(--pineDk)" style={{ opacity: '.9' }} />
            </div>
            <div className="col" style={{ gap: '14px', padding: '34px', background: '#fff', flex: '1' }}>
              <div className="row between" style={{ alignItems: 'baseline' }}><div className="h3">Gold</div><div className="mono dim" style={{ fontSize: '22px' }}>#C9A24B</div></div>
              <div className="body dim">Wealth, premium tiers, calm reward. Quieter than ember — for editorial moments, premium surfaces, and metallic foil on print.</div>
            </div>
          </div>
          <div className="col" style={{ flex: 'none', width: '330px', gap: '18px', justifyContent: 'center' }}>
            <div className="kicker">Discipline</div>
            <div className="body">Pick <span className="ember">one</span> accent per surface. Ember for product energy, gold for premium &amp; print. They never appear together at full strength.</div>
          </div>
        </div>
        <div className="pageno">13</div>
      </div>
    </section>
  )
}
