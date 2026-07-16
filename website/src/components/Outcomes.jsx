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
      <section className="principle-band" id="ethics" aria-labelledby="principle-title">
        <div className="shell principle-inner">
          <div className="people-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="principle-copy">
            <h2 id="principle-title">AI is not a replacement for humans. It is a force accelerator.</h2>
            <p>
              Knowledge and human judgment decide whether that force becomes a multiplier or a problem that
              compounds.
            </p>
            <p className="principle-commitment">
              We teach a people-first approach: use AI to help the people already doing the work accomplish more.
              It should not be a shortcut to cut them out. If AI adds capacity, hold off on new hiring until the
              work calls for the next role.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
