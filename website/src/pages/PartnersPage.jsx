import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Host, reviewer, or community partner"
        title="Help test the material in a setting that serves people."
        body="AI Without Fear is gathering interest in the proposed lab. A useful first conversation names the audience, room, access needs, local data rules, and the people who must review the material."
      >
        <a className="button button--primary" href="/guides/">Review the guides</a>
        <a className="text-link" href="/programs/session-1/">Read the first session</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="partner-path-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Ways to help</p><h2 id="partner-path-title">Put the material in front of the right people.</h2></div>
          <div className="partner-paths">
            <div><span>01</span><h3>Review the curriculum</h3><p>Check the language, examples, accessibility, and safety boundaries for your field.</p></div>
            <div><span>02</span><h3>Host a practice session</h3><p>Provide a room or online setting, recruit participants, and name a local contact for questions or incidents.</p></div>
            <div><span>03</span><h3>Adapt a community edition</h3><p>Replace examples with public or fictional material that matches the audience without importing private organizational data.</p></div>
            <div><span>04</span><h3>Report what needs work</h3><p>Record confusing language, missing decisions, accessibility problems, and questions the guide does not answer.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="partner-boundary-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Boundary</p><h2 id="partner-boundary-title">No private system or client data belongs in a public workshop.</h2></div>
          <div className="plain-disclosure">
            <p>Use approved public facts, invented records, or sanitized examples. Do not copy private prompts, internal policies, customer information, employee records, credentials, or security details into the presentation or workbook.</p>
          </div>
        </div>
      </section>

      <ContactBand
        title="Start with the audience and setting."
        body="Send who you serve, where the session would happen, and which questions need local review."
        subject="AI Without Fear partner information request"
      />
    </>
  )
}
