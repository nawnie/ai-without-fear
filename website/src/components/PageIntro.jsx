export default function PageIntro({ eyebrow, title, body, children }) {
  return (
    <section className="page-intro">
      <div className="shell page-intro-layout">
        <div>
          <p className="page-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-intro-copy">
          <p>{body}</p>
          {children ? <div className="page-intro-actions">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
