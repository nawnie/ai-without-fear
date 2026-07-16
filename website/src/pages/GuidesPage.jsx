import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { guideLibrary, sessions } from '../data/content.js'

export default function GuidesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Free guide library"
        title="Take the material. Change it for your room."
        body="These guides are for community organizations that want to teach the lab themselves. Read them online, print the worksheets, download the editable files, and keep the human-review rules intact."
      >
        <a className="button button--primary" href="/guides/presentation/">Start with the presentation</a>
        <a className="text-link" href="/guides/facilitator/">Read the facilitator guide</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="guide-library-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">Workshop materials</p>
            <h2 id="guide-library-title">Everything needed to prepare the room.</h2>
          </div>
          <div className="guide-directory">
            {guideLibrary.map((guide) => (
              <a href={guide.href} key={guide.href}>
                <span><strong>{guide.title}</strong><small>{guide.description}</small></span>
                <em>{guide.format}</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="session-guides-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">Session guides</p>
            <h2 id="session-guides-title">Open only the part you need.</h2>
          </div>
          <div className="session-link-list">
            {sessions.map((session) => (
              <a href={session.resourceHref} key={session.slug}>
                <span>{session.number}</span>
                <strong>{session.title}</strong>
                <small>{session.outcome}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactBand subject="AI Without Fear guide question" />
    </>
  )
}
