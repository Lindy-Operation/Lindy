// 법무 문서용 최소 마크다운 렌더러.
// 지원: ## / ### 제목, 문단, **굵게**, - 목록, | 표 |, > 인용, --- 구분선.
// 라이브러리를 붙이지 않는 이유 — 이 문서들이 쓰는 문법이 이게 전부이고,
// 법적 문서에 서드파티 파서의 예상 못한 해석이 끼는 것을 피하고 싶어서다.

function inline(text, keyPrefix) {
  // **굵게** 만 처리한다
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={`${keyPrefix}-b${i}`}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

const isTableRow = (l) => l.trim().startsWith('|') && l.trim().endsWith('|')
const isTableDivider = (l) => /^\|[\s:|-]+\|$/.test(l.trim())
const cells = (l) =>
  l
    .trim()
    .slice(1, -1)
    .split('|')
    .map((c) => c.trim())

export default function Markdown({ source }) {
  const lines = String(source).replace(/\r\n/g, '\n').split('\n')
  const out = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (!trimmed) {
      i += 1
      continue
    }

    if (trimmed === '---') {
      out.push(<hr key={key++} />)
      i += 1
      continue
    }

    if (trimmed.startsWith('### ')) {
      out.push(<h3 key={key++}>{inline(trimmed.slice(4), `h${key}`)}</h3>)
      i += 1
      continue
    }

    if (trimmed.startsWith('## ')) {
      out.push(<h2 key={key++}>{inline(trimmed.slice(3), `h${key}`)}</h2>)
      i += 1
      continue
    }

    // 표 — 헤더 행 + 구분선 + 본문 행
    if (isTableRow(line) && i + 1 < lines.length && isTableDivider(lines[i + 1])) {
      const head = cells(line)
      i += 2
      const body = []
      while (i < lines.length && isTableRow(lines[i])) {
        body.push(cells(lines[i]))
        i += 1
      }
      out.push(
        <div className="md-table-wrap" key={key++}>
          <table>
            <thead>
              <tr>
                {head.map((c, ci) => (
                  <th key={ci}>{inline(c, `th${ci}`)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((c, ci) => (
                    <td key={ci}>{inline(c, `td${ri}-${ci}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    // 인용
    if (trimmed.startsWith('> ')) {
      const buf = []
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        buf.push(lines[i].trim().slice(2))
        i += 1
      }
      out.push(<blockquote key={key++}>{inline(buf.join(' '), `q${key}`)}</blockquote>)
      continue
    }

    // 목록 (이어지는 들여쓴 줄은 같은 항목으로 붙인다)
    if (trimmed.startsWith('- ')) {
      const items = []
      while (i < lines.length && (lines[i].trim().startsWith('- ') || /^\s{2,}\S/.test(lines[i]))) {
        if (lines[i].trim().startsWith('- ')) items.push(lines[i].trim().slice(2))
        else items[items.length - 1] += ` ${lines[i].trim()}`
        i += 1
      }
      out.push(
        <ul key={key++}>
          {items.map((t, ii) => (
            <li key={ii}>{inline(t, `li${ii}`)}</li>
          ))}
        </ul>,
      )
      continue
    }

    // 문단 — 빈 줄이 나올 때까지 이어붙인다
    const buf = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('- ') &&
      !lines[i].trim().startsWith('> ') &&
      lines[i].trim() !== '---' &&
      !isTableRow(lines[i])
    ) {
      buf.push(lines[i].trim())
      i += 1
    }
    out.push(<p key={key++}>{inline(buf.join(' '), `p${key}`)}</p>)
  }

  return <div className="md">{out}</div>
}
