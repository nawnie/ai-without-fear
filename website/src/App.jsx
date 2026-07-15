import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PartnersPage from './pages/PartnersPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import SessionOnePage from './pages/SessionOnePage.jsx';
import SessionTwoPage from './pages/SessionTwoPage.jsx';
import WhoWeServePage from './pages/WhoWeServePage.jsx';
import { GITHUB_URL, TORCHIE_ASSET_URL } from './data.js';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Without Fear',
  alternateName: 'AIWF',
  url: 'https://ai-wf.org/',
  logo: TORCHIE_ASSET_URL,
  description: 'A public-benefit education project developing practical, vendor-neutral artificial intelligence literacy and governance training for veterans, educators, government teams, nonprofits, and community organizations.',
  slogan: 'Master principles, not platforms. Tools change. Principles transfer.',
  areaServed: { '@type': 'Country', name: 'United States' },
  sameAs: [GITHUB_URL],
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Community AI Readiness Lab',
  url: 'https://ai-wf.org/programs/',
  description: 'A six-session, beginner-safe course that helps community organizations understand AI, classify information, verify outputs, review tools, draft policy, and document one low-risk workflow.',
  provider: { '@type': 'Organization', name: 'AI Without Fear', sameAs: 'https://ai-wf.org/' },
  educationalLevel: 'Beginner',
  inLanguage: 'en-US',
  teaches: ['AI literacy', 'Data classification', 'Human verification', 'Responsible AI governance', 'Low-risk workflow design'],
};

function normalizePath(pathname) {
  const withoutIndex = pathname.replace(/index\.html$/, '');
  const clean = withoutIndex.replace(/\/+$/, '');
  return clean ? `${clean}/` : '/';
}

function Route() {
  const path = normalizePath(window.location.pathname);
  const routes = {
    '/': HomePage,
    '/programs/': ProgramsPage,
    '/programs/session-1/': SessionOnePage,
    '/programs/session-2/': SessionTwoPage,
    '/who-we-serve/': WhoWeServePage,
    '/partners/': PartnersPage,
    '/about/': AboutPage,
  };
  const Page = routes[path] || NotFoundPage;
  return <Page />;
}

export default function App() {
  const path = normalizePath(window.location.pathname);
  const includeCourse = path.startsWith('/programs/');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {includeCourse ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} /> : null}
      <Route />
    </>
  );
}
