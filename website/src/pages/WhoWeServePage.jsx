import { audiences, CONTACT_EMAIL } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, PartnerStrip, SectionHeading, TextLink } from '../components.jsx';

function AudienceAside() {
  return (
    <div className="audience-aside">
      <p className="eyebrow">Same foundation</p>
      <h2>Different examples. Different boundaries. Same human accountability.</h2>
      <div className="audience-aside__links">
        {audiences.map((audience) => <a href={`#${audience.slug}`} key={audience.slug}>{audience.title}<Icon name="arrow" size={15} /></a>)}
      </div>
    </div>
  );
}

function AudienceBand({ audience, index }) {
  return (
    <section className={`audience-band ${index % 2 ? 'audience-band--paper' : ''}`} id={audience.slug}>
      <div className="shell audience-band__grid">
        <div className="audience-band__title">
          <span className="icon-tile"><Icon name={audience.icon} size={28} /></span>
          <p className="eyebrow">Audience {String(index + 1).padStart(2, '0')}</p>
          <h2>{audience.title}</h2>
          <p>{audience.promise}</p>
          <TextLink href={`mailto:${CONTACT_EMAIL}?subject=AIWF%20training%20for%20${encodeURIComponent(audience.title)}`} icon="mail">Discuss this audience</TextLink>
        </div>
        <div className="audience-band__details">
          <div>
            <h3>Useful starting points</h3>
            <ul className="check-list">
              {audience.useCases.map((item) => <li key={item}><Icon name="check" size={17} /> {item}</li>)}
            </ul>
          </div>
          <div className="boundary-card"><Icon name="shield" size={24} /><span><strong>Boundary</strong><p>{audience.boundary}</p></span></div>
          <div className="deliverable-line"><span>Leaves with</span><strong>{audience.deliverable}</strong></div>
        </div>
      </div>
    </section>
  );
}

export default function WhoWeServePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Who we serve"
        title="Practical AI readiness for the people carrying real responsibility"
        body="AI Without Fear adapts examples, exercises, and risk boundaries to each audience without diluting the core principles: protect information, verify output, document decisions, and keep a human accountable."
        aside={<AudienceAside />}
      >
        <ButtonLink href="/programs/">Explore the program</ButtonLink>
        <ButtonLink href="/partners/" variant="secondary">Bring a cohort</ButtonLink>
      </PageHero>
      <section className="section section--paper">
        <div className="shell scope-note">
          <SectionHeading
            eyebrow="How adaptation works"
            title="We change the scenario, not the safety standard"
            body="A veteran employment example, a classroom example, a public-agency example, and a nonprofit example may look different. The decision process underneath remains recognizable and transferable."
          />
          <div className="scope-note__steps">
            <div><span>01</span><strong>Start with the mission and real work</strong></div>
            <div><span>02</span><strong>Name information and decision risks</strong></div>
            <div><span>03</span><strong>Use public or sanitized practice</strong></div>
            <div><span>04</span><strong>Leave with a documented rule</strong></div>
          </div>
        </div>
      </section>
      {audiences.map((audience, index) => <AudienceBand audience={audience} index={index} key={audience.slug} />)}
      <PartnerStrip title="Have an audience we have not named yet?" copy="The core curriculum can be adapted for libraries, workforce programs, arts organizations, faith-based service groups, community colleges, and other mission-driven teams." />
    </PageShell>
  );
}
