import { contactEmail, makeContactHref } from '../data/content.js'

export default function ContactBand({
  title = 'Need help choosing where to start?',
  body = 'Tell us who you serve and what your team wants to learn. Every information request goes to the same business inbox.',
  subject = 'AI Without Fear information request',
}) {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <div className="shell contact-band-layout">
        <div>
          <h2 id="contact-band-title">{title}</h2>
          <p>{body}</p>
        </div>
        <div className="contact-band-action">
          <a className="button button--coral" href={makeContactHref(subject, [
            'Hi Shawn,',
            '',
            'I would like more information about AI Without Fear.',
            '',
            'Organization or community:',
            'Question:',
          ])}>
            Request information
          </a>
          <span>{contactEmail}</span>
        </div>
      </div>
    </section>
  )
}
