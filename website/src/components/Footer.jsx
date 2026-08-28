import BrandMark from './BrandMark.jsx'
import { contactEmail, makeContactHref } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand brand--footer" href="/" aria-label="AI Without Fear home">
          <BrandMark light />
          <span>AI Without Fear</span>
        </a>
        <p>Practical AI education that helps people do more while keeping human judgment at the center.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/programs/">Program</a>
          <a href="/guides/">Guides</a>
          <a href="/about/">About</a>
          <a href={makeContactHref('AI Without Fear information request')}>{contactEmail}</a>
        </nav>
        <p className="footer-meta">Nonprofit community education initiative in development.</p>
        <p className="footer-credit">
          Website built by <a href="https://aiembeddedsystems.com/">aiembeddedsystems.com</a>
        </p>
      </div>
    </footer>
  )
}
