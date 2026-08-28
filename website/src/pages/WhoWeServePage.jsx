import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { audiences } from '../data/content.js'

export default function WhoWeServePage() {
  return (
    <>
      <PageIntro
        eyebrow="Who it is for"
        title="Community-serving teams with more responsibility than technology staff."
        body="The same safety rules apply across the program. The examples, worksheets, and approval questions change to fit the people in the room."
      >
        <a className="button button--primary" href="/programs/">See the six sessions</a>
        <a className="text-link" href="/partners/">Host or review the lab</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="audience-list-title">
        <div className="shell">
          <div className="section-label section-label--wide"><p className="page-eyebrow">Audience guide</p><h2 id="audience-list-title">Start with the work and the information it touches.</h2></div>
          <div className="audience-bands">
            {audiences.map((audience, index) => (
              <article id={audience.id} key={audience.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{audience.title}</h3>
                <p>{audience.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="adaptation-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Adaptation rule</p><h2 id="adaptation-title">Change the scenario, not the safety standard.</h2></div>
          <ol className="large-steps">
            <li><span>01</span><p>Name the audience’s work and purpose.</p></li>
            <li><span>02</span><p>Identify the information and decisions that require care.</p></li>
            <li><span>03</span><p>Practice with public, fictional, or sanitized material.</p></li>
            <li><span>04</span><p>Leave with a written rule and a named owner.</p></li>
          </ol>
        </div>
      </section>

      <ContactBand subject="AI Without Fear audience information request" />
    </>
  )
}
