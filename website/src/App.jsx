import { useEffect } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import AboutPage from './pages/AboutPage.jsx'
import FacilitatorPage from './pages/FacilitatorPage.jsx'
import GuidesPage from './pages/GuidesPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import PartnersPage from './pages/PartnersPage.jsx'
import PresentationPage from './pages/PresentationPage.jsx'
import ProgramPage from './pages/ProgramPage.jsx'
import SafetyKitPage from './pages/SafetyKitPage.jsx'
import SessionPage from './pages/SessionPage.jsx'
import SourcesPage from './pages/SourcesPage.jsx'
import WhoWeServePage from './pages/WhoWeServePage.jsx'
import WorkbookPage from './pages/WorkbookPage.jsx'
import { sessions } from './data/content.js'

function normalizePath(pathname) {
  const withoutIndex = pathname.replace(/index\.html$/, '')
  const clean = withoutIndex.replace(/\/+$/, '')
  return clean ? `${clean}/` : '/'
}

const routes = {
  '/': {
    title: 'AI Without Fear | Community AI Readiness Lab',
    description: 'A proposed six-session community learning lab with free guides for responsible, people-first AI use.',
    element: <HomePage />,
  },
  '/programs/': {
    title: 'Six-Session Community AI Readiness Lab | AI Without Fear',
    description: 'Read the six-session program and open each facilitator-ready session guide.',
    element: <ProgramPage />,
  },
  '/guides/': {
    title: 'Free Community AI Workshop Guides | AI Without Fear',
    description: 'Facilitator, learner, safety, presentation, technical, and session guides for community AI education.',
    element: <GuidesPage />,
  },
  '/guides/facilitator/': {
    title: 'Facilitator Guide | AI Without Fear',
    description: 'Prepare and run an accessible community AI workshop with safe examples and visible human review.',
    element: <FacilitatorPage />,
  },
  '/guides/workbook/': {
    title: 'Learner Workbook | AI Without Fear',
    description: 'Printable worksheets for all six Community AI Readiness Lab sessions.',
    element: <WorkbookPage />,
  },
  '/guides/safety-kit/': {
    title: 'Nonprofit AI Safety Kit | AI Without Fear',
    description: 'Copyable policy, data classification, review, tool, incident, and adoption templates.',
    element: <SafetyKitPage />,
  },
  '/guides/presentation/': {
    title: 'Community AI Workshop Presentation Draft | AI Without Fear',
    description: 'Download an editable presentation draft and run the six-session workshop with your own team.',
    element: <PresentationPage />,
  },
  '/guides/sources/': {
    title: 'Sources and Further Reading | AI Without Fear',
    description: 'Current first-party sources for AI risk, claims, privacy, security, and product behavior.',
    element: <SourcesPage />,
  },
  '/who-we-serve/': {
    title: 'Who the Lab Is For | AI Without Fear',
    description: 'Community-serving organizations, libraries, workforce partners, educators, and public-service teams.',
    element: <WhoWeServePage />,
  },
  '/partners/': {
    title: 'Host or Review the Lab | AI Without Fear',
    description: 'Review, host, adapt, or test the proposed Community AI Readiness Lab.',
    element: <PartnersPage />,
  },
  '/about/': {
    title: 'About AI Without Fear',
    description: 'People-first community AI education with privacy, judgment, and responsibility kept in human hands.',
    element: <AboutPage />,
  },
}

function resolveRoute(path) {
  if (routes[path]) return routes[path]

  const session = sessions.find((item) => path === `/programs/${item.slug}/`)
  if (session) {
    return {
      title: `${session.title} | AI Without Fear`,
      description: session.detail,
      element: <SessionPage session={session} />,
    }
  }

  return {
    title: 'Page Not Found | AI Without Fear',
    description: 'The requested AI Without Fear page was not found.',
    element: <NotFoundPage />,
  }
}

export default function App() {
  const path = normalizePath(window.location.pathname)
  const route = resolveRoute(path)

  useEffect(() => {
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', route.description)
    window.scrollTo(0, 0)
  }, [path, route.description, route.title])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">{route.element}</main>
      <Footer />
    </>
  )
}
