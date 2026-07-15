import BrandMark from './BrandMark.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand brand--footer" href="#top" aria-label="AI Without Fear home">
          <BrandMark light />
          <span>AI Without Fear</span>
        </a>
        <p>Practical AI education with people, judgment, and community needs at the center.</p>
        <p className="footer-meta">Nonprofit community education initiative.</p>
        <p className="footer-credit">
          Website built by <a href="https://aiembeddedsystems.com/">aiembeddedsystems.com</a>
        </p>
      </div>
    </footer>
  )
}
