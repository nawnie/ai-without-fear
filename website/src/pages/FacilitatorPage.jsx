import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'

const deliveryRules = [
  'Define technical terms the first time they appear.',
  'Use public, fictional, or sanitized examples.',
  'Show failures, not only polished output.',
  'Separate creative tasks from factual tasks.',
  'Open and check citations before treating them as evidence.',
  'Record the date when vendor behavior or policy was checked.',
]

export default function FacilitatorPage() {
  return (
    <>
      <PageIntro
        eyebrow="Facilitator guide"
        title="Help the room make better decisions."
        body="The facilitator is not there to sell AI or scare people away from it. The job is to make the decisions visible, keep practice safe, and leave the organization with something it can review."
      >
        <a className="button button--primary" href="/downloads/facilitator-guide.md" download>Download the full guide</a>
        <a className="text-link" href="/guides/presentation/">Open the presentation starter</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="teaching-pattern-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">Teaching pattern</p>
            <h2 id="teaching-pattern-title">Principle. Example. Practice. Decision.</h2>
            <p>Analogy first. Technical depth only when it helps the activity.</p>
          </div>
          <ol className="large-steps">
            <li><span>01</span><p>State the principle in plain language.</p></li>
            <li><span>02</span><p>Show a concrete example, including a failure.</p></li>
            <li><span>03</span><p>Guide practice with safe source material.</p></li>
            <li><span>04</span><p>Write down the decision, owner, or next question.</p></li>
          </ol>
        </div>
      </section>

      <section className="page-section" aria-labelledby="delivery-rules-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">Delivery rules</p>
            <h2 id="delivery-rules-title">Keep the room beginner-safe.</h2>
          </div>
          <ul className="lined-list">{deliveryRules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
        </div>
      </section>

      <section className="page-section page-section--worksheet" aria-labelledby="room-check-title">
        <div className="shell worksheet-layout">
          <div><p className="page-eyebrow">Before the session</p><h2 id="room-check-title">Check the account before projecting the screen.</h2></div>
          <div className="check-columns">
            <div><h3>Access</h3><p>Offer digital and large-print material, captions, keyboard access, predictable breaks, and a way to participate without creating a commercial account.</p></div>
            <div><h3>Demonstration</h3><p>Sign out of personal accounts, clear prior history, prepare sanitized prompts, test the network, and keep an offline fallback.</p></div>
            <div><h3>Incident response</h3><p>If sensitive information appears, stop. Do not read it aloud. Notify the host contact and follow the organization’s incident process.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="closeout-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Closeout</p><h2 id="closeout-title">Collect four short answers.</h2></div>
          <ul className="lined-list">
            <li>One thing the participant can now explain.</li>
            <li>One decision the organization still needs to make.</li>
            <li>One part of the material that was confusing.</li>
            <li>One risk or concern that surfaced.</li>
          </ul>
        </div>
      </section>

      <ContactBand subject="Facilitator guide information request" />
    </>
  )
}
