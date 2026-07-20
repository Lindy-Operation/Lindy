import { Link, useParams } from 'react-router-dom'
import Spark from '../components/Spark.jsx'
import Markdown from '../components/Markdown.jsx'
import { KIND, docPath, findProduct, findVersions } from '../legal/registry.js'
import {
  currentVersion,
  displayVersion,
  pendingVersion,
  versionByEffective,
  formatDate,
} from '../legal/versioning.js'
import './Legal.css'

const T = {
  ko: {
    back: '← 법무 문서',
    home: '← 홈으로',
    notFound: '문서를 찾을 수 없습니다.',
    archived: '보관본',
    archivedNote: (d) => `${d}부터 시행된 보관본입니다. 현재 시행 중인 본문이 아닙니다.`,
    viewCurrent: '현행본 보기',
    pending: (d) => `${d}부터 개정본이 시행됩니다.`,
    notYet: (d) => `이 문서는 ${d}부터 시행됩니다. 아직 효력이 발생하지 않았습니다.`,
    viewPending: '개정본 미리 보기',
    effective: (d) => `${d} 시행`,
    history: '개정 이력',
    hVersion: '버전',
    hEffective: '시행일',
    hSummary: '내용',
    hLink: '전문',
    view: '보기',
    inForce: '현행',
    scheduled: '시행 예정',
    other: 'English',
  },
  en: {
    back: '← Legal',
    home: '← Home',
    notFound: 'Document not found.',
    archived: 'Archived',
    archivedNote: (d) => `This is the version that took effect on ${d}. It is not the version currently in force.`,
    viewCurrent: 'View current version',
    pending: (d) => `An amended version takes effect on ${d}.`,
    notYet: (d) => `This document takes effect on ${d}. It is not yet in force.`,
    viewPending: 'Preview the amended version',
    effective: (d) => `Effective ${d}`,
    history: 'Revision history',
    hVersion: 'Version',
    hEffective: 'Effective',
    hSummary: 'Summary',
    hLink: 'Full text',
    view: 'View',
    inForce: 'In force',
    scheduled: 'Scheduled',
    other: '한국어',
  },
}

export default function LegalDoc({ lang = 'ko' }) {
  const { product: slug, kind, effective } = useParams()
  const t = T[lang]
  const product = findProduct(slug)
  const versions = findVersions(slug, kind, lang)

  if (!product || !versions?.length || !KIND[kind]) {
    return (
      <div className="lp legal">
        <header className="legal-nav">
          <Link className="brand" to="/"><Spark /><span className="name">Lindy</span></Link>
          <Link className="legal-back mono" to="/legal">{t.back}</Link>
        </header>
        <main className="legal-main">
          <p className="legal-note">{t.notFound}</p>
        </main>
      </div>
    )
  }

  const current = currentVersion(versions) // 아직 아무것도 시행 안 됐으면 null
  const pending = pendingVersion(versions)
  const fallback = displayVersion(versions)
  const shown = effective ? versionByEffective(versions, effective) : fallback
  const isArchive = Boolean(effective) && Boolean(current) && shown?.effective !== current.effective
  // 최초 제정본을 시행일 전에 공개한 상태 — 본문은 보여주되 아직 효력이 없음을 명시한다
  const isNotYetInForce = !current && shown?.effective === fallback?.effective

  if (!shown) {
    return (
      <div className="lp legal">
        <header className="legal-nav">
          <Link className="brand" to="/"><Spark /><span className="name">Lindy</span></Link>
          <Link className="legal-back mono" to={docPath(slug, kind, lang)}>{t.back}</Link>
        </header>
        <main className="legal-main">
          <p className="legal-note">{t.notFound}</p>
        </main>
      </div>
    )
  }

  const otherLang = lang === 'ko' ? 'en' : 'ko'

  return (
    <div className="lp legal">
      <div className="legal-bg" aria-hidden="true" />

      <header className="legal-nav">
        <Link className="brand" to="/">
          <Spark />
          <span className="name">Lindy</span>
        </Link>
        <span className="legal-navlinks mono">
          <Link className="legal-back" to={docPath(slug, kind, otherLang)}>{t.other}</Link>
          <Link className="legal-back" to="/legal">{t.back}</Link>
        </span>
      </header>

      <main className="legal-main legal-doc-main">
        <div className="legal-kicker">
          {product.name[lang]} · {KIND[kind][lang]}
        </div>
        <h1>{KIND[kind][lang]}</h1>
        <p className="legal-effective mono">
          v{shown.version} · {t.effective(formatDate(shown.effective, lang))}
          {isArchive && <em className="legal-tag">{t.archived}</em>}
        </p>

        {/* 아직 시행 전인 최초 제정본 */}
        {isNotYetInForce && (
          <div className="legal-banner">
            <strong>{t.notYet(formatDate(shown.effective, lang))}</strong>
          </div>
        )}

        {/* 개정본 시행 예정 배너 — 고지 의무 이행 */}
        {!isArchive && !isNotYetInForce && pending && (
          <div className="legal-banner">
            <strong>{t.pending(formatDate(pending.effective, lang))}</strong>
            <Link to={docPath(slug, kind, lang, pending.effective)}>{t.viewPending} →</Link>
          </div>
        )}

        {isArchive && (
          <div className="legal-banner legal-banner-archive">
            <strong>{t.archivedNote(formatDate(shown.effective, lang))}</strong>
            <Link to={docPath(slug, kind, lang)}>{t.viewCurrent} →</Link>
          </div>
        )}

        <article className="legal-body">
          <Markdown source={shown.body} />
        </article>

        <section className="legal-history">
          <h2>{t.history}</h2>
          <div className="md-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{t.hVersion}</th>
                  <th>{t.hEffective}</th>
                  <th>{t.hSummary}</th>
                  <th>{t.hLink}</th>
                </tr>
              </thead>
              <tbody>
                {[...versions].reverse().map((v) => {
                  // current가 null일 수 있다 — 아직 아무 버전도 시행되지 않은 경우
                  const state =
                    v.effective === current?.effective
                      ? t.inForce
                      : pending && v.effective === pending.effective
                        ? t.scheduled
                        : ''
                  return (
                    <tr key={v.effective}>
                      <td className="mono">v{v.version}</td>
                      <td className="mono">
                        {formatDate(v.effective, lang)}
                        {state && <em className="legal-tag">{state}</em>}
                      </td>
                      <td>{v.summary}</td>
                      <td>
                        <Link to={docPath(slug, kind, lang, v.effective)}>{t.view}</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div className="legal-foot mono">
          문의 · <a href="mailto:danny@lindyoperation.com">danny@lindyoperation.com</a>
        </div>
      </main>
    </div>
  )
}
