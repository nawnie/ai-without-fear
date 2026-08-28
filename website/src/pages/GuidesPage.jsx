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
              <article key={guide.href}>
                <a className="guide-directory__open" href={guide.href}>
                  <span><strong>{guide.title}</strong><small>{guide.description}</small></span>
                  <em>Read online</em>
                </a>
                <a className="guide-directory__download" href={guide.downloadHref} download>
                  Download {guide.downloadLabel ?? 'Markdown'}
                </a>
              </article>
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
              <article key={session.slug}>
                <a className="session-link-list__open" href={session.resourceHref}>
                  <span>{session.number}</span>
                  <strong>{session.title}</strong>
                  <small>{session.outcome}</small>
                </a>
                <a className="session-link-list__download" href={`/downloads/${session.slug}-guide.md`} download>
                  Download Markdown
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactBand subject="AI Without Fear guide question" />
    </>
  )
}
