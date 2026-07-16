import PageIntro from '../components/PageIntro.jsx'

export default function NotFoundPage() {
  return (
    <PageIntro
      eyebrow="Page not found"
      title="That guide is not at this address."
      body="Use the guide library to find the current workshop material."
    >
      <a className="button button--primary" href="/guides/">Open the guide library</a>
      <a className="text-link" href="/">Return home</a>
    </PageIntro>
  )
}
