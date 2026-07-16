import ContactBand from '../components/ContactBand.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { sessions } from '../data/content.js'

export default function WorkbookPage() {
  return (
    <>
      <PageIntro
        eyebrow="Learner workbook"
        title="Write down categories and decisions, never sensitive data."
        body="The workbook follows all six sessions. Print this page or download the Markdown file, then adapt the labels for your organization."
      >
        <a className="button button--primary" href="/downloads/learner-workbook.md" download>Download the workbook</a>
        <button className="text-button" type="button" onClick={() => window.print()}>Print this page</button>
      </PageIntro>

      <section className="workbook-warning">
        <div className="shell">
          <strong>Do not write passwords, private names, donor details, health information, personnel information, or other sensitive data in this workbook.</strong>
        </div>
      </section>

      <div className="shell workbook-pages">
        {sessions.map((session) => (
          <section className="workbook-page" id={session.slug} key={session.slug} aria-labelledby={`${session.slug}-workbook-title`}>
            <div className="workbook-page-heading">
              <span>{session.number}</span>
              <div><p>Session worksheet</p><h2 id={`${session.slug}-workbook-title`}>{session.title}</h2></div>
            </div>
            {session.worksheet.map((prompt) => (
              <div className="write-field" key={prompt}>
                <h3>{prompt}</h3>
                <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
              </div>
            ))}
            <div className="workbook-takeaway"><strong>Leave with</strong><span>{session.outcome}</span></div>
          </section>
        ))}
        <section className="workbook-page" aria-labelledby="action-plan-title">
          <div className="workbook-page-heading"><span>30</span><div><p>Day plan</p><h2 id="action-plan-title">What changes next?</h2></div></div>
          {['In the next 7 days', 'In the next 30 days', 'Person responsible', 'Evidence that the change happened'].map((prompt) => (
            <div className="write-field" key={prompt}><h3>{prompt}</h3><span aria-hidden="true" /><span aria-hidden="true" /></div>
          ))}
        </section>
      </div>

      <ContactBand subject="Learner workbook information request" />
    </>
  )
}
