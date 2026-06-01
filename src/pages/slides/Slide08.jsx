import Spark from '../../components/Spark.jsx'

export default function Slide08() {
  return (
    <section className="light" data-label="Construction">
      <div className="frame">
        <div className="topbar"><div className="kicker">Logo · Construction</div><div className="kicker">Clearspace &amp; minimum size</div></div>
        <div className="grow row" style={{ gap: '96px', alignItems: 'center' }}>
          <div className="col" style={{ gap: '24px', flex: 'none' }}>
            <div style={{ position: 'relative', width: '460px', height: '460px', border: '1px dashed #0e171455', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: '104px', border: '1px solid var(--ember)', borderRadius: '6px' }}></div>
              <Spark size={252} />
            </div>
            <div className="mono dim" style={{ fontSize: '20px', letterSpacing: '.1em' }}>CLEARSPACE = HEIGHT OF THE FLAME TIP (1×) ON ALL SIDES</div>
          </div>
          <div className="col grow" style={{ gap: '48px' }}>
            <div className="col" style={{ gap: '18px' }}>
              <div className="kicker">Minimum size</div>
              <div className="row" style={{ alignItems: 'flex-end', gap: '48px' }}>
                <div className="col center" style={{ gap: '14px' }}><Spark size={64} /><div className="mono dimmer" style={{ fontSize: '18px' }}>64px</div></div>
                <div className="col center" style={{ gap: '14px' }}><Spark size={32} /><div className="mono dimmer" style={{ fontSize: '18px' }}>32px</div></div>
                <div className="col center" style={{ gap: '14px' }}><Spark size={16} /><div className="mono dimmer" style={{ fontSize: '18px' }}>16px&nbsp;·&nbsp;min</div></div>
              </div>
            </div>
            <div className="hr"></div>
            <div className="col" style={{ gap: '18px', maxWidth: '560px' }}>
              <div className="kicker">Rules</div>
              <div className="body">Built on a 100-unit grid. Never redraw, recolor the interior updraft, or detach the flame from its silhouette. Below 16px, use the solid favicon weight.</div>
            </div>
          </div>
        </div>
        <div className="pageno">08</div>
      </div>
    </section>
  )
}
