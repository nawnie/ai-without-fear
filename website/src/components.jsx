import { useEffect, useState } from 'react';
import { CONTACT_EMAIL, GITHUB_URL, TORCHIE_ASSET_URL, TRAINING_SOURCE_URL } from './data.js';

export function Icon({ name, size = 24 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    back: <><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    service: <><path d="M12 3v18"/><path d="M4.5 7.5 12 3l7.5 4.5"/><path d="M5 21h14"/><path d="M7 11h10v10H7z"/></>,
    education: <><path d="m2 10 10-5 10 5-10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></>,
    civic: <><path d="M3 10h18"/><path d="M5 10v9"/><path d="M9 10v9"/><path d="M15 10v9"/><path d="M19 10v9"/><path d="M2 21h20"/><path d="m12 3 9 5H3z"/></>,
    community: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20c.6-4 2.5-6 5.5-6s5 2 5.5 6"/><path d="M14 14c3.7-.5 6.2 1.4 7 5"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.8 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.7 7.5-9.5V6z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v17H7.5A3.5 3.5 0 0 0 4 22z"/><path d="M4 5.5v16"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 21c0-4.5 2-7 6-7s6 2.5 6 7"/><path d="M16 5.5a3 3 0 0 1 0 5.8"/><path d="M17 14c2.5.5 4 2.5 4 6"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4"/><path d="M9 19c-3 .9-3-1.5-4.2-2"/></>,
    external: <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v7H4V6h7"/></>,
    pulse: <><path d="M3 12h4l2-7 4 14 2-7h6"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></>,
    route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h2a4 4 0 0 0 4-4V10a4 4 0 0 1 4-4"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></>,
    spark: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/></>,
  };

  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.check}
    </svg>
  );
}

export function ButtonLink({ href, children, variant = 'primary', icon = 'arrow', external = false, download = false }) {
  return (
    <a className={`button button--${variant}`} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...(download ? { download: true } : {})}>
      <span>{children}</span>
      <Icon name={icon} size={18} />
    </a>
  );
}

export function TextLink({ href, children, icon = 'arrow', external = false, download = false, className = '' }) {
  return (
    <a className={`text-link ${className}`.trim()} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...(download ? { download: true } : {})}>
      <span>{children}</span>
      <Icon name={icon} size={17} />
    </a>
  );
}

export function SectionHeading({ eyebrow, title, body, align = 'left', compact = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${compact ? 'section-heading--compact' : ''}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className="section-lede">{body}</p> : null}
    </div>
  );
}

export function PageHero({ eyebrow, title, body, children, aside, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="shell page-hero__grid">
        <div className="page-hero__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="page-hero__lede">{body}</p>
          {children ? <div className="page-hero__actions">{children}</div> : null}
        </div>
        {aside ? <aside className="page-hero__aside">{aside}</aside> : null}
      </div>
    </section>
  );
}

const navItems = [
  { href: '/programs/', label: 'Programs' },
  { href: '/who-we-serve/', label: 'Who we serve' },
  { href: '/partners/', label: 'For partners' },
  { href: '/about/', label: 'About' },
];

function normalizePath(pathname) {
  const withoutIndex = pathname.replace(/index\.html$/, '');
  const clean = withoutIndex.replace(/\/+$/, '');
  return clean ? `${clean}/` : '/';
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const currentPath = typeof window === 'undefined' ? '/' : normalizePath(window.location.pathname);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="shell header-inner">
        <a className="brand" href="/" aria-label="AI Without Fear home">
          <img src={TORCHIE_ASSET_URL} width="48" height="48" alt="" />
          <span className="brand-copy">
            <strong>AI Without Fear</strong>
            <span>Community AI readiness</span>
          </span>
        </a>
        <nav id="main-navigation" className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={currentPath.startsWith(item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={`mailto:${CONTACT_EMAIL}?subject=Bring%20an%20AIWF%20pilot`} onClick={() => setOpen(false)}>Bring a pilot</a>
        </nav>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <img src={TORCHIE_ASSET_URL} width="58" height="58" alt="" />
          <div>
            <strong>AI Without Fear</strong>
            <span>Master principles, not platforms.</span>
          </div>
        </div>
        <div className="footer-columns">
          <div>
            <strong>Explore</strong>
            <a href="/programs/">Programs</a>
            <a href="/programs/session-1/">Session 1</a>
            <a href="/programs/session-2/">Session 2</a>
          </div>
          <div>
            <strong>Connect</strong>
            <a href="/who-we-serve/">Who we serve</a>
            <a href="/partners/">For partners</a>
            <a href="/about/">About</a>
          </div>
          <div>
            <strong>Evidence</strong>
            <a href={`${TRAINING_SOURCE_URL}/SLIDE_DECK_OUTLINE.md`}>Demo deck</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <Icon name="external" size={13} /></a>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>Public-benefit project • nonprofit formation in progress</span>
        <span>© {new Date().getFullYear()} AI Without Fear. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }) {
  return (
    <>
      <SiteHeader />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

export function PartnerStrip({ title = 'Bring practical AI readiness to your community.', copy = 'Host a demonstration, sponsor a cohort, or help us build the organizational layer around the curriculum.' }) {
  return (
    <section className="partner-strip">
      <div className="shell partner-strip__inner">
        <div>
          <p className="eyebrow">A useful next step</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="partner-strip__actions">
          <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=AIWF%20pilot%20conversation`}>Start a conversation</ButtonLink>
          <TextLink href="/partners/">See partnership paths</TextLink>
        </div>
      </div>
    </section>
  );
}

export function ResourceLink({ resource }) {
  return (
    <a className="resource-link" href={resource.href} target="_blank" rel="noreferrer">
      <span className="resource-link__icon"><Icon name="file" size={22} /></span>
      <span className="resource-link__copy">
        <strong>{resource.title}</strong>
        <small>{resource.copy}</small>
      </span>
      <span className="resource-link__type">{resource.type}</span>
      <Icon name="external" size={18} />
    </a>
  );
}
