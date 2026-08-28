import { guideLibrary } from '../data/content.js'

export default function ResourcePreview() {
  return (
    <section className="resource-preview" id="guides" aria-labelledby="resource-preview-title">
      <div className="shell resource-preview-layout">
        <div className="resource-preview-heading">
          <p className="page-eyebrow">Use the material</p>
          <h2 id="resource-preview-title">Run the lab with your own team.</h2>
          <p>The guides are public, printable, and meant to be adapted. Start with one session or use the full six-session path.</p>
          <a className="text-link" href="/guides/">Open the guide library</a>
        </div>
        <div className="resource-rows">
          {guideLibrary.slice(0, 4).map((guide) => (
            <a href={guide.href} className="resource-row" key={guide.href}>
              <span>
                <strong>{guide.title}</strong>
                <small>{guide.description}</small>
              </span>
              <em>{guide.format}</em>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
