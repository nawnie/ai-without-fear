import BrandMark from './BrandMark.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="AI Without Fear home">
          <BrandMark />
          <span>AI Without Fear</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#lab">The lab</a>
          <a href="#outcomes">What you’ll leave with</a>
          <a href="#ethics">Our ethic</a>
          <a href="#communities">For communities</a>
        </nav>
      </div>
    </header>
  )
}
