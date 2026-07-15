import './ParameterPrimer.css'

export default function ParameterPrimer() {
  return (
    <section className="parameter-primer" id="parameters" aria-labelledby="parameter-title">
      <div className="shell parameter-primer-layout">
        <div className="parameter-primer-heading">
          <h2 id="parameter-title">What exactly is a parameter?</h2>
          <p>A learned numerical setting inside a model.</p>
        </div>

        <div className="parameter-primer-copy">
          <p className="parameter-analogy">
            Picture a giant mixing board covered in tiny dials. Training shows the model example after
            example and nudges many dials at once. A parameter is one dial&apos;s learned setting. One
            dial is not a fact or a decision; together, the settings shape how the model responds.
          </p>

          <div className="parameter-boundaries" aria-label="Useful distinctions">
            <p>
              <strong>Training example</strong>
              <span>Something used to adjust the model during training.</span>
            </p>
            <p>
              <strong>Parameter</strong>
              <span>A numerical setting learned from many adjustments.</span>
            </p>
            <p>
              <strong>Prompt or upload</strong>
              <span>Information supplied to the system for the current task.</span>
            </p>
          </div>

          <a className="text-link parameter-deep-link" href="/guides/parameters/">
            Read the full technical breakdown <span aria-hidden="true">→</span>
          </a>
          <p className="parameter-session-note">
            Sessions 1 and 2 use this analogy first, then offer the technical guide for learners who
            want to open the machine room.
          </p>
        </div>
      </div>
    </section>
  )
}
