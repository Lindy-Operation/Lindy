import { Link } from 'react-router-dom'
import Spark from '../components/Spark.jsx'
import { PRODUCTS, KIND, docPath } from '../legal/registry.js'
import { currentVersion, displayVersion, pendingVersion, formatDate } from '../legal/versioning.js'
import './Legal.css'

// 법무 문서 허브 — 제품이 늘어나면 registry.js에만 추가하면 여기에 자동으로 나온다.
export default function Legal() {
  return (
    <div className="lp legal">
      <div className="legal-bg" aria-hidden="true" />

      <header className="legal-nav">
        <Link className="brand" to="/">
          <Spark />
          <span className="name">Lindy</span>
        </Link>
        <Link className="legal-back mono" to="/">← 홈으로</Link>
      </header>

      <main className="legal-main">
        <div className="legal-kicker">Legal · 법무 문서</div>
        <h1>이용약관</h1>

        <p className="legal-note">
          주식회사 린디오퍼레이션이 운영하는 각 서비스의 이용약관과 개인정보 처리방침입니다.
          모든 문서는 <span className="ember">시행일별로 보존</span>되며, 개정 시 시행 예정 본문을
          미리 공개합니다.
        </p>

        {PRODUCTS.map((product) => (
          <section className="legal-product" key={product.slug}>
            <div className="legal-product-head">
              <h2>{product.name.ko}</h2>
              <span className="mono">{product.tagline.ko}</span>
            </div>

            <div className="legal-docs">
              {Object.keys(product.docs).map((kind) => {
                const versions = product.docs[kind].ko
                if (!versions?.length) return null
                const current = currentVersion(versions)
                const shown = displayVersion(versions)
                const pending = pendingVersion(versions)
                if (!shown) return null
                return (
                  <Link className="legal-doc" to={docPath(product.slug, kind)} key={kind}>
                    <span className="ld-name">{KIND[kind].ko}</span>
                    <span className="ld-meta mono">
                      v{shown.version} · {formatDate(shown.effective)} 시행
                      {/* 현행본이 없으면 '개정'이 아니라 아직 시행 전인 최초 제정본이다 */}
                      {!current ? <em> · 시행 예정</em> : pending && <em> · 개정 예정</em>}
                    </span>
                    <span className="ld-go mono">보기 →</span>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}

        <div className="legal-foot mono">
          문의 · <a href="mailto:danny@lindyoperation.com">danny@lindyoperation.com</a>
        </div>
      </main>
    </div>
  )
}
