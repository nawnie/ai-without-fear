import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { sessions } from '../data/content.js'

const openingSlides = [
  'Community AI Readiness Lab',
  'AI is a force accelerator, not a replacement for people',
  'Use fictional, public, or sanitized information during training',
  'The six-session path and the work each team will produce',
]

export default function PresentationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Presentation starter"
        title="An editable deck for running your own workshop."
        body="The draft covers all six sessions. Replace local examples, owners, dates, and policy details before delivery. Keep sensitive information out of the slides and practice files."
      >
        <a className="button button--primary" href="/downloads/community-ai-readiness-lab-presentation-draft.pptx" download>Download the PowerPoint draft</a>
        <a className="text-link" href="/downloads/presentation-outline.md" download>Download the text outline</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="deck-opening-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Opening slides</p><h2 id="deck-opening-title">Set the rules before opening a tool.</h2></div>
          <ol className="slide-outline-list">{openingSlides.map((slide, index) => <li key={slide}><span>{String(index + 1).padStart(2, '0')}</span>{slide}</li>)}</ol>
        </div>
      </section>

      <section className="page-section" aria-labelledby="deck-sections-title">
        <div className="shell">
          <div className="section-label section-label--wide"><p className="page-eyebrow">Six sections</p><h2 id="deck-sections-title">Use the whole deck or export one session.</h2></div>
          <div className="deck-sections">
            {sessions.map((session) => (
              <article key={session.slug}>
                <span>{session.number}</span>
                <h3>{session.title}</h3>
                <p>{session.detail}</p>
                <a href={session.resourceHref}>Read the session guide</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--worksheet" aria-labelledby="adapt-deck-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Before presenting</p><h2 id="adapt-deck-title">Make four local decisions.</h2></div>
          <ul className="lined-list">
            <li>Name the approved tools and accounts for the room.</li>
            <li>Replace examples with public or fictional material that fits the audience.</li>
            <li>Name the person or role that approves yellow-data use and tool adoption.</li>
            <li>Add the local incident contact, accessibility plan, and offline fallback.</li>
          </ul>
        </div>
      </section>

      <ContactBand subject="Presentation draft information request" />
    </>
  )
}
