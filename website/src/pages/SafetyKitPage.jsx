import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'

const reviewChecks = [
  'Names, dates, numbers, quotations, links, and citations match the source.',
  'No confidential information or unsupported promise was added.',
  'Tone, reading level, and accessibility fit the audience.',
  'A qualified person reviewed any high-impact content.',
  'Required disclosure and approval steps were followed.',
]

export default function SafetyKitPage() {
  return (
    <>
      <PageIntro
        eyebrow="Nonprofit AI safety kit"
        title="Copy the templates, then put your own owners and rules in them."
        body="This educational starter kit covers a short interim policy, information classification, human review, tool checks, incident records, and a 90-day adoption plan. It is not legal, privacy, security, employment, financial, or medical advice."
      >
        <a className="button button--primary" href="/downloads/nonprofit-ai-safety-kit.md" download>Download the full kit</a>
        <button className="text-button" type="button" onClick={() => window.print()}>Print this page</button>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="policy-starter-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Interim policy starter</p><h2 id="policy-starter-title">Answer eight questions.</h2></div>
          <ol className="policy-questions">
            <li>Why may the organization use AI?</li>
            <li>Which tools are approved?</li>
            <li>Which information may be used?</li>
            <li>Which decisions may not be delegated?</li>
            <li>Who reviews output?</li>
            <li>When must AI assistance be disclosed?</li>
            <li>How are incidents reported?</li>
            <li>Who owns updates, and when is the next review?</li>
          </ol>
        </div>
      </section>

      <section className="page-section" aria-labelledby="traffic-light-title">
        <div className="shell">
          <div className="section-label section-label--wide"><p className="page-eyebrow">Data Traffic Light</p><h2 id="traffic-light-title">Classify before anyone prompts.</h2></div>
          <div className="traffic-table">
            <div className="traffic-table-row traffic-table-row--green"><strong>Green</strong><p>Public, fictional, sanitized, properly licensed, or already approved for public use.</p><span>Use only in approved tools.</span></div>
            <div className="traffic-table-row traffic-table-row--yellow"><strong>Yellow</strong><p>Internal plans, procedures, draft budgets, meeting notes, proposals, or non-public statistics.</p><span>Define the purpose and get approval.</span></div>
            <div className="traffic-table-row traffic-table-row--red"><strong>Red</strong><p>Credentials, identifying records, health, personnel, donor, client, student, banking, tax, legal, or investigation details.</p><span>Keep it out unless an authorized workflow has the required controls.</span></div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--worksheet" aria-labelledby="review-check-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Human review</p><h2 id="review-check-title">Check the work before it moves.</h2></div>
          <ul className="checklist-print">{reviewChecks.map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>

      <section className="page-section" aria-labelledby="tool-incident-title">
        <div className="shell check-columns">
          <div><p className="page-eyebrow">Tool review</p><h2 id="tool-incident-title">Record the plan and date.</h2><p>Check account ownership, admin controls, prompts, uploads, training use, deletion, export, actions, connectors, audit records, and fallback.</p></div>
          <div><p className="page-eyebrow">Incident log</p><h2>Keep only what is needed.</h2><p>Record the tool, workflow, category, what happened, immediate containment, people notified, corrective action, owner, and closeout date.</p></div>
          <div><p className="page-eyebrow">Leadership brief</p><h2>Ask for named decisions.</h2><p>Request approval or revision of the policy, tool owner, first workflow, incident contact, and next review date.</p></div>
        </div>
      </section>

      <ContactBand subject="Nonprofit AI safety kit information request" />
    </>
  )
}
