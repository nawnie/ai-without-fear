import { contactHref } from '../data/content.js'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}
export default function InterestSection() {
  return (
    <section className="interest-section" aria-labelledby="interest-title">
      <div className="shell interest-layout">
        <div>
          <h2 id="interest-title">Would this help your community?</h2>
          <p>
            We’re gathering interest before we schedule a cohort. Tell us who you serve, what questions
            your team has, and what would make participation possible.
          </p>
          <a className="button button--coral" href={contactHref}>
            <MailIcon />
            Email Shawn about the lab
          </a>
          <a className="contact-email" href="mailto:shawnohagan2@gmail.com">shawnohagan2@gmail.com</a>
          <p className="commitment-note">A note of interest is not a commitment.</p>
        </div>
        <figure className="cora-mascot">
          <img
            src="/assets/cora-firefly.jpg"
            alt="Cora, a friendly illustrated robot, holding out a hand beneath a glowing firefly"
            width="1254"
            height="1254"
            loading="lazy"
          />
          <figcaption>Meet Cora, our friendly guide for learning without the hype.</figcaption>
        </figure>
      </div>
    </section>
  )
}
