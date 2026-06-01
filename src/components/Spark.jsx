// The Spark — Lindy Operation's mark.
// A single tongue of flame, leaning as if pushed and stronger for it,
// with an updraft cut through its center that reads as a rising line.
// Inlined as a <path> (not <use>) so `currentColor` resolves on the
// consuming element — color is driven by the wrapper's CSS `color`.
const SPARK_PATH =
  'M54 14 C 50 33 70 41 70 60 A 22 22 0 0 1 26 60 C 26 47 33 41 39 31 C 40 41 45 46 50 47 C 52 38 50 25 54 14 Z M50 47 C 44 50 41 56 44 63 C 38 60 36 53 39 46 C 43 39 49 39 50 47 Z'

export default function Spark({ size, color, className = '', style = {}, ...rest }) {
  const wrapStyle = { ...style }
  if (size != null) {
    wrapStyle.width = typeof size === 'number' ? `${size}px` : size
    wrapStyle.height = typeof size === 'number' ? `${size}px` : size
  }
  if (color) wrapStyle.color = color

  return (
    <span className={`mark${className ? ` ${className}` : ''}`} style={wrapStyle} {...rest}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d={SPARK_PATH} />
      </svg>
    </span>
  )
}

export { SPARK_PATH }
