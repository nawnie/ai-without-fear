import { audiences, GITHUB_URL, sessions, TORCHIE_ASSET_URL, TRAINING_SOURCE_URL } from '../data.js';
import { ButtonLink, Icon, PageShell, PartnerStrip, SectionHeading, TextLink } from '../components.jsx';

function HomeHero() {
  return (
    <section className="home-hero">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="shell home-hero__grid">
        <div className="home-hero__copy">
          <a className="status-link" href="/about/#formation-status">
            <span className="status-dot" /> Public-benefit project • nonprofit formation in progress <Icon name="arrow" size={15} />
          </a>
          <p className="eyebrow">Practical AI literacy for real communities</p>
          <h1>AI should expand human capability, <span>not replace it.</span></h1>
          <p className="home-hero__lede">AI Without Fear helps veterans, educators, public-service teams, nonprofits, and community organizations use artificial intelligence safely, critically, and practically.</p>
          <div className="home-hero__actions">
            <ButtonLink href="/programs/session-1/">Try the demo lesson</ButtonLink>
            <ButtonLink href="/partners/" variant="secondary">Fund or host a pilot</ButtonLink>
          </div>
          <ul className="trust-row" aria-label="Program principles">
            <li><Icon name="check" size={17} /> Vendor-neutral</li>
            <li><Icon name="check" size={17} /> Privacy-aware</li>
            <li><Icon name="check" size={17} /> Human-reviewed</li>
          </ul>
        </div>
        <div className="home-hero__visual" aria-label="Torchie, the AI Without Fear mascot">
          <div className="signal-ring signal-ring--one" />
          <div className="signal-ring signal-ring--two" />
          <div className="mascot-card">
            <div className="mascot-badge">Field tech online</div>
            <img src={TORCHIE_ASSET_URL} width="760" height="760" alt="Torchie, a friendly robot mascot inside the AI Without Fear shield" fetchPriority="high" />
            <div className="torchie-note">
              <span className="torchie-note__label">TORCHIE NOTE</span>
              <strong>Master principles, not platforms.</strong>
              <span>Tools change. Principles transfer.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shell home-hero__proof">
        <span>Built for the people doing the work</span>
        <span>Measurable community outcomes</span>
        <span>No hype fog machine required</span>
      </div>
    </section>
  );
}

function MissionPreview() {
  return (
    <section className="section section--paper">
      <div className="shell mission-preview">
        <div>
          <SectionHeading
            eyebrow="From panic to participation"
            title="A trustworthy way into AI"
            body="Communities do not need another promise that AI will change everything by Tuesday. They need a clear way to decide what is useful, what is risky, and who remains accountable."
          />
          <TextLink href="/about/">Read our mission and principles</TextLink>
        </div>
        <div className="principle-rail" aria-label="AI Without Fear principles">
          <div><span>01</span><strong>Understand before adopting</strong><p>Explain the system in plain language and show its failure modes.</p></div>
          <div><span>02</span><strong>Protect information first</strong><p>Classify data before discussing prompts, tools, or automation.</p></div>
          <div><span>03</span><strong>Keep human judgment visible</strong><p>Every useful workflow names its reviewer, approval step, and fallback.</p></div>
        </div>
      </div>
    </section>
  );
}

function AudiencePreview() {
  return (
    <section className="section section--audience-preview">
      <div className="shell">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Who we serve"
            title="One foundation, adapted to different missions"
            body="The principles stay steady. Examples, risk boundaries, and deliverables are tuned to the people in the room."
          />
          <TextLink href="/who-we-serve/">Explore every audience</TextLink>
        </div>
        <div className="audience-link-list">
          {audiences.map((audience) => (
            <a className="audience-link-row" href={`/who-we-serve/#${audience.slug}`} key={audience.slug}>
              <span className="icon-tile"><Icon name={audience.icon} size={25} /></span>
              <span className="audience-link-row__copy">
                <strong>{audience.title}</strong>
                <small>{audience.short}</small>
              </span>
              <Icon name="arrow" size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoPreview() {
  const demoSessions = sessions.filter((session) => session.ready);
  return (
    <section className="section section--paper section--demo-preview">
      <div className="shell">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Demo curriculum"
            title="Sessions 1 and 2 are ready to show"
            body="The public demo starts with a plain-language AI mental model, then immediately moves to information safety. No account or confidential data is required."
          />
          <TextLink href="/programs/">See the full six-session lab</TextLink>
        </div>
        <div className="demo-link-grid">
          {demoSessions.map((session) => (
            <a className={`demo-link-card demo-link-card--${session.number}`} href={session.href} key={session.number}>
              <span className="demo-link-card__number">Session {session.number}</span>
              <h3>{session.title}</h3>
              <p>{session.summary}</p>
              <div className="demo-link-card__bottom">
                <span><Icon name="clock" size={17} /> 90 minutes</span>
                <strong>{session.outcome}</strong>
                <Icon name="arrow" size={21} />
              </div>
            </a>
          ))}
        </div>
        <div className="evidence-bar">
          <div><Icon name="file" size={22} /><span><strong>Materials already built</strong><small>Facilitator deck, learner handouts, activity cards, and the Data Traffic Light poster.</small></span></div>
          <div className="evidence-bar__links">
            <TextLink href={`${TRAINING_SOURCE_URL}/SLIDE_DECK_OUTLINE.md`} icon="download" external>Open demo deck</TextLink>
            <TextLink href={GITHUB_URL} icon="github" external>View GitHub</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <MissionPreview />
      <AudiencePreview />
      <DemoPreview />
      <PartnerStrip
        title="Help turn working curriculum into community infrastructure."
        copy="We are looking for early host sites, access sponsors, evaluators, veteran organizations, educators, public agencies, nonprofits, and a responsible fiscal-sponsorship path."
      />
    </PageShell>
  );
}
