import { Link } from 'react-router-dom'
import Spark from '../components/Spark.jsx'
import './Disclosure.css'

// 전자공고 목록 — 공고가 등록되면 이 배열에 추가
const NOTICES = [
  // { date: '2026-01-02', title: '회사 설립 공고', kind: '설립' },
]

export default function Disclosure() {
  return (
    <div className="lp disc">
      <div className="disc-bg" aria-hidden="true" />

      <header className="disc-nav">
        <Link className="brand" to="/">
          <Spark />
          <span className="name">Lindy</span>
        </Link>
        <Link className="disc-back mono" to="/">← 홈으로</Link>
      </header>

      <main className="disc-main">
        <div className="disc-kicker">전자공고 · Electronic Disclosures</div>
        <h1>전자공시</h1>

        <p className="disc-note">
          주식회사 린디 오퍼레이션의 공고는 회사 정관에 따라 회사의 인터넷 홈페이지
          (<span className="ember">lindyoperation.com</span>)에 게재합니다. 다만, 전산장애 또는
          그 밖의 부득이한 사유로 회사의 홈페이지에 공고할 수 없는 경우에는 회사가 정하는
          일간신문에 게재합니다.
        </p>

        <div className="disc-ledger">
          <div className="disc-head">
            <span>일자</span>
            <span>제목</span>
            <span>구분</span>
          </div>
          {NOTICES.length === 0 ? (
            <div className="disc-empty">현재 등록된 전자공고가 없습니다.</div>
          ) : (
            NOTICES.map((n) => (
              <div className="disc-row" key={n.date + n.title}>
                <span className="dt">{n.date}</span>
                <span className="ti">{n.title}</span>
                <span className="kd mono">{n.kind}</span>
              </div>
            ))
          )}
        </div>

        <div className="disc-foot mono">
          문의 · <a href="mailto:danny@lindyoperation.com">danny@lindyoperation.com</a>
        </div>
      </main>
    </div>
  )
}
