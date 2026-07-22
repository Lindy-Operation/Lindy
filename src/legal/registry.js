// 법무 문서 레지스트리 — 제품이 늘어나면 여기에만 추가하면 된다.
// 라우트·허브 목록·프리렌더 경로가 전부 이 배열에서 파생된다.
//
// 새 제품 추가 절차:
//   1. src/legal/<제품>.<종류>.<언어>.js 에 버전 배열을 만든다 (chart-draw.* 참고)
//   2. 아래 PRODUCTS 에 항목을 추가한다
//   끝. 라우트와 프리렌더는 자동으로 늘어난다.

import { CHART_DRAW_TERMS_KO } from './chart-draw.terms.ko.js'
import { CHART_DRAW_TERMS_EN } from './chart-draw.terms.en.js'
import { CHART_DRAW_PRIVACY_KO } from './chart-draw.privacy.ko.js'
import { CHART_DRAW_PRIVACY_EN } from './chart-draw.privacy.en.js'

export const LANGS = ['ko', 'en']

export const KIND = {
  terms: { ko: '이용약관', en: 'Terms of Service' },
  privacy: { ko: '개인정보 처리방침', en: 'Privacy Policy' },
}

export const PRODUCTS = [
  {
    slug: 'chart-draw',
    name: { ko: 'ChartDraw', en: 'ChartDraw' },
    tagline: {
      ko: '차트 패턴 학습 게임',
      en: 'A chart-pattern learning game',
    },
    docs: {
      terms: { ko: CHART_DRAW_TERMS_KO, en: CHART_DRAW_TERMS_EN },
      privacy: { ko: CHART_DRAW_PRIVACY_KO, en: CHART_DRAW_PRIVACY_EN },
    },
  },
]

export function findProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null
}

/** (제품, 종류, 언어) → 버전 배열. 없으면 null */
export function findVersions(slug, kind, lang) {
  const product = findProduct(slug)
  return product?.docs?.[kind]?.[lang] ?? null
}

/** 문서 경로 — 한국어가 기본, 영어는 /en 을 붙인다 */
export function docPath(slug, kind, lang = 'ko', effective = null) {
  const base = `/legal/${slug}/${kind}${lang === 'en' ? '/en' : ''}`
  return effective ? `${base}/v/${effective}` : base
}

/** 프리렌더용 — 허브 + 현행본 + 모든 보관본 경로를 전부 뱉는다 */
export function allLegalRoutes() {
  const routes = ['/legal']
  for (const product of PRODUCTS) {
    for (const kind of Object.keys(product.docs)) {
      for (const lang of LANGS) {
        const versions = product.docs[kind]?.[lang]
        if (!versions?.length) continue
        routes.push(docPath(product.slug, kind, lang))
        for (const v of versions) {
          routes.push(docPath(product.slug, kind, lang, v.effective))
        }
      }
    }
  }
  return routes
}
