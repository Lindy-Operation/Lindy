// 법적 문서 버전 관리 — 시행일 기준 자동 전환 + 보관본 영구 URL.
//
// 규칙 (제품이 늘어나도 동일):
// 1. 기존 버전의 body는 절대 수정하지 않는다. 보관본이 훼손된다. 새 버전을 배열 끝에 추가한다.
// 2. effective = 게시일 + 고지 기간.
//    - 일반 변경: 7일 이상
//    - 이용자에게 불리하거나 중대한 변경(권리 축소·유료화·수집 항목 확대 등): 30일 이상 + 개별 통지
// 3. 배열은 시행일 오름차순을 유지한다.
// 4. 배포하면 시행 예정 배너와 개정 이력이 자동으로 뜨고, 시행일 00:00(KST)에 본문이 전환된다.

/** 시행일(YYYY-MM-DD) → KST 자정 Date */
export const kstDate = (d) => new Date(`${d}T00:00:00+09:00`)

/**
 * 현재 시행 중인 버전 = 시행일이 지난 것 중 최신.
 * 아직 아무 버전도 시행되지 않았으면 **null**을 반환한다.
 * (첫 제정본을 시행일 전에 미리 공개하는 경우가 있는데, 그때 본문을 현행인 것처럼
 *  보여주면 사실과 다르다. 호출부가 "시행 예정" 상태를 구분해 표시해야 한다.)
 */
export function currentVersion(versions, now = new Date()) {
  const past = versions.filter((v) => kstDate(v.effective) <= now)
  return past[past.length - 1] ?? null
}

/** 화면에 보여줄 기본 버전 — 현행본이 있으면 그것, 없으면 가장 먼저 시행될 것 */
export function displayVersion(versions, now = new Date()) {
  return currentVersion(versions, now) ?? versions[0] ?? null
}

/** 고지 기간 중인(아직 시행 전) 버전 — 없으면 null */
export function pendingVersion(versions, now = new Date()) {
  return versions.find((v) => kstDate(v.effective) > now) ?? null
}

/** 시행일로 특정 보관본 찾기 */
export function versionByEffective(versions, effective) {
  return versions.find((v) => v.effective === effective) ?? null
}

export function formatDate(effective, lang = 'ko') {
  const [y, m, d] = effective.split('-').map(Number)
  if (lang === 'en') {
    const month = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ][m - 1]
    return `${month} ${d}, ${y}`
  }
  return `${y}년 ${m}월 ${d}일`
}
