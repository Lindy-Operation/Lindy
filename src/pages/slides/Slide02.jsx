export default function Slide02() {
  return (
    <section className="light" data-label="Contents">
      <div className="frame">
        <div className="topbar"><div className="kicker">Contents</div><div className="kicker">Lindy · Brand Book</div></div>
        <div className="grow row" style={{ gap: '90px', alignItems: 'center' }}>
          <div className="h2" style={{ flex: 'none', width: '560px' }}>What's<br />inside.</div>
          <div className="col grow" style={{ gap: '0' }}>
            <div className="hr"></div>
            <div className="row between" style={{ padding: '30px 4px' }}><span className="h3">Brand</span><span className="mono dim" style={{ fontSize: '24px' }}>01 — story, essence, positioning</span></div>
            <div className="hr"></div>
            <div className="row between" style={{ padding: '30px 4px' }}><span className="h3">Logo</span><span className="mono dim" style={{ fontSize: '24px' }}>02 — the mark, construction, lockups</span></div>
            <div className="hr"></div>
            <div className="row between" style={{ padding: '30px 4px' }}><span className="h3">Color &amp; Type</span><span className="mono dim" style={{ fontSize: '24px' }}>03 — palette, accents, Geist</span></div>
            <div className="hr"></div>
            <div className="row between" style={{ padding: '30px 4px' }}><span className="h3">Applications</span><span className="mono dim" style={{ fontSize: '24px' }}>04 — app, social, web, print, goods</span></div>
            <div className="hr"></div>
          </div>
        </div>
        <div className="pageno">02</div>
      </div>
    </section>
  )
}
