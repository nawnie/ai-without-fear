export default function BrandMark({ light = false }) {
  return (
    <span className={`brand-mark${light ? ' brand-mark--light' : ''}`} aria-hidden="true">
      <img src="/assets/cora-firefly.jpg" alt="" width="64" height="64" />
    </span>
  )
}
