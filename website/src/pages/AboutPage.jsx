import { TORCHIE_ASSET_URL, CONTACT_EMAIL, faqs, GITHUB_URL, resources } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, ResourceLink, SectionHeading, TextLink } from '../components.jsx';

function AboutAside() {
  return (
    <div className="about-aside">
      <img src={TORCHIE_ASSET_URL} width="132" height="132" alt="Torchie, the AI Without Fear mascot" />
      <div>
        <p className="eyebrow">Torchie’s job</p>
        <h2>Make difficult systems feel approachable.</h2>
        <p>Torchie is the flashlight, not the authority. Sources, policies, qualified reviewers, and accountable humans remain in charge.</p>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <section className="section section--paper">
      <div className="shell about-mission-grid">
        <div>
          <SectionHeading
            eyebrow="Mission"
            title="Help communities understand, use, and govern AI without surrendering privacy, agency, or judgment"
            body="AI Without Fear is being built as a public-benefit education project for people and organizations that need practical leverage, not model worship or doom theater."
          />
          <blockquote>“Master principles, not platforms. Tools change. Principles transfer.”</blockquote>
        </div>
        <div className="principles-list">
          <div><span>01</span><h3>Human capability first</h3><p>AI may gather, organize, draft, compare, explain, and test. People provide goals, values, lived experience, taste, and final decisions.</p></div>
          <div><span>02</span><h3>Source discipline</h3><p>Fluent output is not evidence. Current, volatile, high-impact, legal, financial, medical, privacy, licensing, and safety claims require qualified verification.</p></div>
          <div><span>03</span><h3>Beginner-safe by design</h3><p>Training uses public, fictional, or sanitized information and gives learners a path that does not require a commercial account.</p></div>
          <div><span>04</span><h3>Artifacts over applause</h3><p>Every program should leave behind a rule, checklist, policy, workflow, evaluation result, or clearly named next decision.</p></div>
        </div>
      </div>
    </section>
  );
}

function FormationStatus() {
  return (
    <section className="section" id="formation-status">
      <div className="shell formation-layout">
        <div>
          <SectionHeading
            eyebrow="Current status"
            title="Building the work before polishing the plaque"
            body="AI Without Fear is an emerging public-benefit education project. It is not yet a federally recognized 501(c)(3) organization. The curriculum, pilot evidence, governance, founding board, and fiscal-sponsorship path are being developed openly and in sequence."
          />
          <div className="formation-disclosure formation-disclosure--dark"><Icon name="lock" size={21} /><p>Contributions are not represented as tax-deductible unless made through an approved charitable fiscal sponsor.</p></div>
        </div>
        <div className="formation-checklist">
          <h3>Organizational build queue</h3>
          <div><Icon name="check" size={18} /><span><strong>Curriculum and demo materials</strong><small>Built and ready for review</small></span></div>
          <div><Icon name="check" size={18} /><span><strong>Pilot charter and evaluation plan</strong><small>Drafted for partner conversations</small></span></div>
          <div><Icon name="route" size={18} /><span><strong>Founding board and incorporation</strong><small>Formation work in progress</small></span></div>
          <div><Icon name="route" size={18} /><span><strong>Fiscal sponsor and first host partner</strong><small>Active partnership target</small></span></div>
          <div><Icon name="route" size={18} /><span><strong>Fearless First 10 cohort</strong><small>Launch after governance gates are met</small></span></div>
        </div>
      </div>
    </section>
  );
}

function ProjectLayers() {
  return (
    <section className="section section--paper">
      <div className="shell">
        <SectionHeading
          eyebrow="How the project is organized"
          title="A teaching layer for people and a memory layer for machines"
          body="The project keeps human instruction, technical tools, and machine-facing research distinct so each layer can do its job without pretending to be the others."
        />
        <div className="layer-list">
          <div><span className="layer-list__number">01</span><div><h3>AI Without Fear Field Guide</h3><p>The human-readable technical teaching layer: concepts, workflows, troubleshooting, image generation, video generation, and transferable operating principles.</p><TextLink href="/resources/AI_Without_Fear_Field_Manual_2026.pdf" icon="download" external>Open the Field Manual</TextLink></div></div>
          <div><span className="layer-list__number">02</span><div><h3>Community AI Readiness Lab</h3><p>The organization-ready training layer: data classification, human verification, vendor review, policy, incident response, and one safe workflow.</p><TextLink href="/programs/">Explore the program</TextLink></div></div>
          <div><span className="layer-list__number">03</span><div><h3>AIWF Atlas Layer</h3><p>The machine-facing research and retrieval corpus that preserves project terminology, source discipline, failure patterns, evaluation material, and governed context.</p><TextLink href={GITHUB_URL} icon="github" external>Open the repository</TextLink></div></div>
        </div>
      </div>
    </section>
  );
}

function ResourcesAndFAQ() {
  return (
    <section className="section">
      <div className="shell about-resources-grid">
        <div>
          <SectionHeading
            eyebrow="Project resources"
            title="Inspect the work directly"
            body="The site links out instead of carrying every paragraph on one very long page. Tiny browser scrollbars have suffered enough."
          />
          <div className="resource-list">
            {resources.map((resource) => <ResourceLink resource={resource} key={resource.title} />)}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Common questions" title="Straight answers" compact />
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="about-contact">
      <div className="shell about-contact__inner">
        <div><p className="eyebrow">Start a conversation</p><h2>Funder, host, educator, veteran organization, public agency, nonprofit, or reviewer?</h2><p>Tell us who you serve and what responsible AI readiness would make possible.</p></div>
        <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=AI%20Without%20Fear%20conversation`}>Email {CONTACT_EMAIL}</ButtonLink>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About AI Without Fear"
        title="From panic to participation"
        body="AI Without Fear is a practical education project built around one belief: people who understand tools can do more with their own judgment, creativity, experience, and values."
        aside={<AboutAside />}
      >
        <ButtonLink href="/programs/">Explore the training</ButtonLink>
        <ButtonLink href={GITHUB_URL} variant="secondary" icon="github" external>View GitHub</ButtonLink>
      </PageHero>
      <Mission />
      <FormationStatus />
      <ProjectLayers />
      <ResourcesAndFAQ />
      <Contact />
    </PageShell>
  );
}
