import { CONTACT_EMAIL, GITHUB_URL, pathways, pilotTargets, resources } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, ResourceLink, SectionHeading, TextLink } from '../components.jsx';

function PartnersAside() {
  return (
    <div className="partners-aside">
      <p className="eyebrow">Partner brief</p>
      <h2>Fund something visible.</h2>
      <ul>
        <li><Icon name="check" size={17} /> Two demonstration sessions ready</li>
        <li><Icon name="check" size={17} /> Six-session curriculum drafted</li>
        <li><Icon name="check" size={17} /> Assessments and follow-up metrics</li>
        <li><Icon name="check" size={17} /> Public materials and GitHub evidence</li>
      </ul>
      <a href={`mailto:${CONTACT_EMAIL}?subject=Request%20AIWF%20pilot%20brief`}>Request the pilot brief <Icon name="arrow" size={17} /></a>
    </div>
  );
}

function PartnershipPaths() {
  return (
    <section className="section section--paper">
      <div className="shell">
        <SectionHeading
          eyebrow="Ways to participate"
          title="Four practical partnership paths"
          body="The project needs access, evaluation, trusted hosts, and responsible organizational infrastructure as much as it needs a check."
        />
        <div className="pathway-list">
          {pathways.map((pathway) => (
            <article className="pathway-row" key={pathway.number}>
              <span>{pathway.number}</span>
              <div><h3>{pathway.title}</h3><p>{pathway.copy}</p></div>
              <TextLink href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(pathway.title)}`}>Discuss this path</TextLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PilotEvidence() {
  return (
    <section className="section">
      <div className="shell partner-evidence-layout">
        <div>
          <SectionHeading
            eyebrow="Proposed pilot targets"
            title="Designed for measurable community outcomes"
            body="The first cohort will track knowledge, scenario judgment, artifact completion, workflow quality, and whether the new practice survives after the workshop ends."
          />
          <ul className="check-list check-list--large">
            <li><Icon name="check" size={18} /> Pre/post knowledge assessment</li>
            <li><Icon name="check" size={18} /> Scenario-based judgment score</li>
            <li><Icon name="check" size={18} /> Policy and workflow rubric</li>
            <li><Icon name="check" size={18} /> 30-day and 90-day follow-up</li>
            <li><Icon name="check" size={18} /> Anonymized public impact brief</li>
          </ul>
        </div>
        <div className="target-grid">
          {pilotTargets.map((target) => <div className="target-card" key={target.label}><strong>{target.value}</strong><span>{target.label}</span></div>)}
          <div className="target-card target-card--note"><Icon name="shield" size={28} /><span>Zero sensitive production data used during training</span></div>
        </div>
      </div>
    </section>
  );
}

function ReadyNow() {
  return (
    <section className="section section--paper">
      <div className="shell resources-layout">
        <div>
          <SectionHeading
            eyebrow="What is ready now"
            title="Inspect the work before funding the next layer"
            body="The materials below demonstrate curriculum, visual production, learner support, and technical depth. The project is early. It is not vapor."
          />
          <div className="formation-disclosure"><Icon name="info" size={21} /><p>AI Without Fear is not yet a federally recognized 501(c)(3). Contributions are not represented as tax-deductible unless processed through an approved fiscal sponsor.</p></div>
          <TextLink href={GITHUB_URL} icon="github" external>Review the public repository</TextLink>
        </div>
        <div className="resource-list">
          {resources.slice(0, 3).map((resource) => <ResourceLink resource={resource} key={resource.title} />)}
        </div>
      </div>
    </section>
  );
}

function PartnerContact() {
  return (
    <section className="partner-contact">
      <div className="shell partner-contact__grid">
        <div>
          <p className="eyebrow">Start with the real constraint</p>
          <h2>Tell us who you serve, what access barrier exists, and what a successful pilot would change.</h2>
        </div>
        <div className="partner-contact__panel">
          <p>Useful first conversations include:</p>
          <ul>
            <li>Host site and recruitment support</li>
            <li>Veteran, teacher, public-service, or nonprofit access seats</li>
            <li>Evaluation and curriculum review</li>
            <li>Fiscal sponsorship and formation guidance</li>
          </ul>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=AIWF%20partnership%20conversation&body=Name%3A%0AOrganization%3A%0AWho%20we%20serve%3A%0APartnership%20idea%3A`}>Email {CONTACT_EMAIL}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default function PartnersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For funders, hosts, and formation partners"
        title="Help turn working curriculum into community infrastructure"
        body="AI Without Fear is seeking mission-aligned partners who value access, responsible adoption, rural reach, workforce readiness, public trust, and evidence that survives contact with real work."
        aside={<PartnersAside />}
      >
        <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=Request%20AIWF%20pilot%20brief`}>Request the pilot brief</ButtonLink>
        <ButtonLink href="/programs/session-1/" variant="secondary">See the demo lesson</ButtonLink>
      </PageHero>
      <PartnershipPaths />
      <PilotEvidence />
      <ReadyNow />
      <PartnerContact />
    </PageShell>
  );
}
