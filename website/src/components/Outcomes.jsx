import { outcomes } from '../data/content.js'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.3 4.2L19 7" />
    </svg>
  )
}
export default function Outcomes() {
  return (
    <>
      <section className="outcomes-section" id="outcomes" aria-labelledby="outcomes-title">
        <div className="shell outcomes-layout">
          <figure className="outcomes-art">
            <img
              src="/assets/policy-workshop.webp"
              alt="Three participants working together on a policy worksheet"
              width="1450"
              height="1088"
              loading="lazy"
            />
          </figure>
          <div className="outcomes-copy">
            <h2 id="outcomes-title">Work the lab is built to produce.</h2>
            <p className="outcomes-intro">Participants will work toward a small set of useful, reviewable materials:</p>
            <ul>
              {outcomes.map((outcome) => (
                <li key={outcome}>
                  <CheckIcon />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <aside className="principle-band" aria-label="Guiding principle">
        <div className="shell principle-inner">
          <div className="people-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>AI can be a force multiplier. It is not a substitute for human judgment.</p>
        </div>
      </aside>
    </>
  )
}
