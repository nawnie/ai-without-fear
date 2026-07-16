import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { sessions } from '../data/content.js'

export default function ProgramPage() {
  return (
    <>
      <PageIntro
        eyebrow="Community AI Readiness Lab"
        title="Six sessions that leave the decisions with people."
        body="The proposed lab moves from a plain-language AI orientation to one documented, low-risk workflow. Each guide includes the purpose, teaching path, worksheet prompts, and the decision participants should take home."
      >
        <a className="button button--primary" href="/guides/presentation/">Get the presentation draft</a>
        <a className="text-link" href="/downloads/curriculum.md" download>Download the full curriculum</a>
      </PageIntro>

      <section className="page-section page-section--paper" aria-labelledby="program-path-title">
        <div className="shell editorial-split">
          <div className="section-label">
            <p className="page-eyebrow">The path</p>
            <h2 id="program-path-title">Understand. Classify. Practice. Govern.</h2>
          </div>
          <div className="session-directory">
            {sessions.map((session) => (
              <a href={session.resourceHref} className="session-directory-row" key={session.slug}>
                <span>{session.number}</span>
                <div>
                  <h3>{session.title}</h3>
                  <p>{session.detail}</p>
                </div>
                <strong>{session.outcome}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="program-use-title">
        <div className="shell program-use-layout">
          <div>
            <p className="page-eyebrow">Use one session or all six</p>
            <h2 id="program-use-title">The material works as a series or a set of standalone workshops.</h2>
          </div>
          <div className="ruled-notes">
            <p><strong>For a short introduction:</strong> pair Sessions 1 and 2.</p>
            <p><strong>For staff practice:</strong> add Session 3 and use approved public source material.</p>
            <p><strong>For an organization:</strong> complete the tool review, interim policy, and one safe workflow.</p>
            <p><strong>For any format:</strong> use public, fictional, or sanitized information during training.</p>
          </div>
        </div>
      </section>

      <ContactBand
        title="Want to host or adapt the lab?"
        body="Send the audience, setting, and questions you want the material to address."
        subject="Community AI Readiness Lab information request"
      />
    </>
  )
}
