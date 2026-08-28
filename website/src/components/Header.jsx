import BrandMark from './BrandMark.jsx'
import { makeContactHref } from '../data/content.js'

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="/" aria-label="AI Without Fear home">
          <BrandMark />
          <span>AI Without Fear</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="/programs/">The lab</a>
          <a href="/guides/">Free guides</a>
          <a href="/who-we-serve/">Who it is for</a>
          <a href="/about/">About</a>
          <a href={makeContactHref('AI Without Fear information request')}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
