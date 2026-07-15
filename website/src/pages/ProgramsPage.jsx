import { pilotTargets, programSteps, resources, sessions, TRAINING_SOURCE_URL } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, PartnerStrip, ResourceLink, SectionHeading, TextLink } from '../components.jsx';

function ProgramAside() {
  return (
    <div className="program-summary-card">
      <span className="program-summary-card__label">Community AI Readiness Lab</span>
      <div className="program-summary-card__stats">
        <div><strong>6</strong><span>sessions</span></div>
        <div><strong>90</strong><span>minutes each</span></div>
        <div><strong>10</strong><span>pilot organizations</span></div>
      </div>
      <p>Designed for in-person, hybrid, or online delivery using public, fictional, or sanitized information.</p>
    </div>
  );
}

function ProgramPath() {
  return (
    <section className="section section--blueprint">
      <div className="shell">
        <SectionHeading
          eyebrow="The teaching model"
          title="Understand. Classify. Practice. Govern."
          body="A repeatable path from first exposure to a documented, human-controlled organizational practice."
        />
        <div className="step-rail">
          {programSteps.map((step) => (
            <article className="step-rail__item" key={step.number}>
              <span>{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SessionIndex() {
  return (
    <section className="section section--paper">
      <div className="shell">
        <div className="section-intro-row">
          <SectionHeading
            eyebrow="Six-session curriculum"
            title="Each session leaves a usable artifact"
            body="The first two sessions are the public demonstration. The remaining four complete the organization-ready pilot."
          />
          <TextLink href={`${TRAINING_SOURCE_URL}/SLIDE_DECK_OUTLINE.md`} icon="download" external>Open the demo deck</TextLink>
        </div>
        <div className="session-index">
          {sessions.map((session) => {
            const Wrapper = session.ready ? 'a' : 'article';
            const props = session.ready ? { href: session.href } : {};
            return (
              <Wrapper className={`session-index__row ${session.ready ? 'session-index__row--linked' : ''}`} key={session.number} {...props}>
                <span className="session-index__number">{session.number}</span>
                <div className="session-index__copy">
                  <div className="session-index__title-line">
                    <h3>{session.title}</h3>
                    {session.ready ? <span className="status-tag status-tag--ready">Demo ready</span> : <span className="status-tag">Pilot curriculum</span>}
                  </div>
                  <p>{session.summary}</p>
                </div>
                <div className="session-index__outcome"><small>Leaves with</small><strong>{session.outcome}</strong></div>
                {session.ready ? <Icon name="arrow" size={21} /> : <span className="session-index__dot" />}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="section">
      <div className="shell outcomes-layout">
        <div>
          <SectionHeading
            eyebrow="Pilot completion standard"
            title="Training should change what happens on Monday"
            body="Every organization completes concrete governance and workflow artifacts, then reports what was adopted after 30 and 90 days."
          />
          <ul className="check-list check-list--large">
            <li><Icon name="check" size={19} /> AI tool inventory</li>
            <li><Icon name="check" size={19} /> Data Traffic Light classification sheet</li>
            <li><Icon name="check" size={19} /> Human-review checklist</li>
            <li><Icon name="check" size={19} /> One-page interim AI policy</li>
            <li><Icon name="check" size={19} /> One documented low-risk workflow</li>
            <li><Icon name="check" size={19} /> Board or leadership briefing</li>
          </ul>
        </div>
        <div className="target-grid">
          {pilotTargets.map((target) => (
            <div className="target-card" key={target.label}>
              <strong>{target.value}</strong>
              <span>{target.label}</span>
            </div>
          ))}
          <div className="target-card target-card--note">
            <Icon name="shield" size={28} />
            <span>Zero sensitive production data used during training</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourceLibrary() {
  return (
    <section className="section section--paper">
      <div className="shell resources-layout">
        <SectionHeading
          eyebrow="Open the work"
          title="Demo materials and technical foundation"
          body="Hyperlinks carry the detail so the main pages can breathe. These files show what already exists beyond a promising paragraph."
        />
        <div className="resource-list">
          {resources.map((resource) => <ResourceLink resource={resource} key={resource.title} />)}
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Programs"
        title="Practical training that ends with a decision, not a certificate-shaped souvenir"
        body="The Community AI Readiness Lab helps organizations understand AI, protect information, verify outputs, review tools, write policy, and document one low-risk workflow."
        aside={<ProgramAside />}
      >
        <ButtonLink href="/programs/session-1/">Start with Session 1</ButtonLink>
        <ButtonLink href="/programs/session-2/" variant="secondary">Explore Session 2</ButtonLink>
      </PageHero>
      <ProgramPath />
      <SessionIndex />
      <Outcomes />
      <ResourceLibrary />
      <PartnerStrip />
    </PageShell>
  );
}
