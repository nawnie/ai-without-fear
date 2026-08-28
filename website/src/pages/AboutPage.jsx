import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About AI Without Fear"
        title="Teach the tool without handing it the room."
        body="AI Without Fear is a nonprofit community education initiative in development. The work is built for people who need useful AI skills, plain boundaries, and enough knowledge to remain responsible for the outcome."
      >
        <a className="button button--primary" href="/programs/">Explore the lab</a>
        <a className="text-link" href="/guides/">Use the free guides</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="mission-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Mission</p><h2 id="mission-title">Help people use AI without giving away judgment, privacy, or responsibility.</h2></div>
          <div className="about-principles">
            <div><span>01</span><h3>People stay accountable</h3><p>AI may draft, organize, compare, or explain. People set the goal, review the work, and decide what happens next.</p></div>
            <div><span>02</span><h3>Information is classified first</h3><p>A useful prompt does not excuse an unsafe upload. The tool, account, purpose, data, and permission all matter.</p></div>
            <div><span>03</span><h3>Work leaves a record</h3><p>Each session ends with a rule, worksheet, owner, policy, workflow, or clearly named question.</p></div>
            <div><span>04</span><h3>Tools can change</h3><p>The program teaches source checks and decision habits that still work when a product name or setting changes.</p></div>
          </div>
        </div>
      </section>

      <section className="principle-statement" aria-labelledby="about-principle-title">
        <div className="shell">
          <h2 id="about-principle-title">AI is not a replacement for humans. It is a force accelerator.</h2>
          <p>Knowledge and human judgment decide whether that force multiplies useful work or multiplies errors. Capacity gains should improve reach, quality, and learning, not become an automatic reason to cut people.</p>
        </div>
      </section>

      <section className="page-section" aria-labelledby="status-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Current status</p><h2 id="status-title">The lab is proposed. Interest is being gathered.</h2></div>
          <div className="plain-disclosure">
            <p>No cohorts are scheduled yet. Formation records remain private drafts until they are signed, submitted, and accepted by the appropriate agencies.</p>
            <p>This site does not claim tax-exempt status, solicit donations, or represent contributions as tax-deductible.</p>
          </div>
        </div>
      </section>

      <ContactBand subject="About AI Without Fear information request" />
    </>
  )
}
