import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LabIntro from './components/LabIntro.jsx'
import ParameterPrimer from './components/ParameterPrimer.jsx'
import SessionRail from './components/SessionRail.jsx'
import Outcomes from './components/Outcomes.jsx'
import Communities from './components/Communities.jsx'
import InterestSection from './components/InterestSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <Hero />
      <LabIntro />
      <ParameterPrimer />
      <SessionRail />
      <Outcomes />
      <Communities />
      <InterestSection />
      <Footer />
    </>
  )
}
