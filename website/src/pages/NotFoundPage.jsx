import { ButtonLink, PageShell } from '../components.jsx';

export default function NotFoundPage() {
  return (
    <PageShell>
      <section className="not-found">
        <div className="shell not-found__inner">
          <p className="eyebrow">404 • route not found</p>
          <h1>This path wandered out of the field manual.</h1>
          <p>The page may have moved, or a hyperlink has developed opinions.</p>
          <ButtonLink href="/">Return home</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
