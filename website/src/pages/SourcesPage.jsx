import PageIntro from '../components/PageIntro.jsx'
import { sourceLinks } from '../data/content.js'

export default function SourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sources and further reading"
        title="Check current rules and product behavior before delivery."
        body="The workshop teaches a stable decision process. Vendor settings, account terms, retention, and public guidance can change. These first-party links were checked on July 16, 2026."
      />
      <section className="page-section page-section--paper" aria-labelledby="source-list-title">
        <div className="shell editorial-split">
          <div className="section-label"><p className="page-eyebrow">Primary references</p><h2 id="source-list-title">Open the source, not a summary of it.</h2></div>
          <div className="source-list">
            {sourceLinks.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                <span><strong>{source.title}</strong><small>{source.note}</small></span>
                <em>Official source</em>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
