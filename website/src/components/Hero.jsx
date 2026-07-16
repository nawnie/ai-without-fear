import { contactHref } from '../data/content.js'

export default function Hero() {
  return (
    <main id="main-content">
      <section className="hero" id="top">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <h1>
              Practical AI skills for the people doing the <em>work.</em>
            </h1>
            <p>
              A proposed six-session community learning lab designed to help the people inside small
              organizations expand what they can do with AI while keeping responsibility and human judgment
              where they belong.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={contactHref}>Tell us you’re interested</a>
              <a className="text-link" href="#lab">See what the lab covers</a>
            </div>
            <p className="nonprofit-note">A nonprofit community education initiative.</p>
          </div>
          <figure className="hero-art">
            <img
              src="/assets/community-workshop.webp"
              alt="A community facilitator and four adult learners talking around a workshop table"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>
    </main>
  )
}
