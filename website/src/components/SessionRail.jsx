import { sessions } from '../data/content.js'

export default function SessionRail() {
  return (
    <section className="sessions-section" aria-labelledby="sessions-title">
      <div className="shell sessions-layout">
        <div className="section-heading sessions-heading">
          <h2 id="sessions-title">Six sessions. One practical way forward.</h2>
          <p>Each session helps people turn a fuzzy AI question into a decision they can discuss, test, and own.</p>
          <p className="format-note">Designed for in-person, online, or hybrid cohorts.</p>
        </div>
        <ol className="session-rail">
          {sessions.map((session) => (
            <li key={session.number}>
              <span className="session-number" aria-hidden="true">{session.number}</span>
              <div>
                <h3>{session.title}</h3>
                <p>{session.detail}</p>
                {session.resourceHref && (
                  <a className="text-link session-resource-link" href={session.resourceHref}>
                    {session.resourceLabel} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
