import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { sessions } from '../data/content.js'

export default function SessionPage({ session }) {
  const index = sessions.findIndex((item) => item.slug === session.slug)
  const nextSession = sessions[index + 1]

  return (
    <>
      <PageIntro
        eyebrow={`Session ${session.number}`}
        title={session.title}
        body={session.purpose}
      >
        <a className="button button--primary" href={`/downloads/${session.slug}-guide.md`} download>Download this session guide</a>
        <a className="text-link" href="/guides/workbook/">Open the learner workbook</a>
        <a className="text-link" href="/guides/presentation/">Use the presentation draft</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="objectives-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">What participants practice</p>
            <h2 id="objectives-title">Learning objectives</h2>
          </div>
          <ul className="lined-list">
            {session.objectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </div>
      </section>

      <section className="page-section" aria-labelledby="facilitator-path-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">Facilitator path</p>
            <h2 id="facilitator-path-title">Teach, practice, decide.</h2>
            <p>Keep examples public, fictional, or sanitized. Show at least one failure and make the review step visible.</p>
          </div>
          <ol className="agenda-list">
            {session.agenda.map(([title, copy], agendaIndex) => (
              <li key={title}>
                <span>{String(agendaIndex + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section page-section--worksheet" aria-labelledby="worksheet-title">
        <div className="shell worksheet-layout">
          <div>
            <p className="page-eyebrow">Worksheet prompts</p>
            <h2 id="worksheet-title">Leave with: {session.outcome}</h2>
          </div>
          <div className="worksheet-lines">
            {session.worksheet.map((prompt) => (
              <div key={prompt}>
                <p>{prompt}</p>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="session-next shell" aria-label="Session navigation">
        <a href="/programs/">All six sessions</a>
        {nextSession ? <a href={nextSession.resourceHref}>Next: {nextSession.title}</a> : <a href="/guides/safety-kit/">Next: adapt the safety kit</a>}
      </nav>

      <ContactBand
        title={`Questions about Session ${session.number}?`}
        body="Send the audience, room format, and question. The guides are meant to be changed for local needs without weakening the safety boundaries."
        subject={`Session ${session.number} information request`}
      />
    </>
  )
}
