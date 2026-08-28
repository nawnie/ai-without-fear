import Hero from '../components/Hero.jsx'
import LabIntro from '../components/LabIntro.jsx'
import ParameterPrimer from '../components/ParameterPrimer.jsx'
import SessionRail from '../components/SessionRail.jsx'
import Outcomes from '../components/Outcomes.jsx'
import Communities from '../components/Communities.jsx'
import ResourcePreview from '../components/ResourcePreview.jsx'
import InterestSection from '../components/InterestSection.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <LabIntro />
      <ParameterPrimer />
      <SessionRail />
      <Outcomes />
      <Communities />
      <ResourcePreview />
      <InterestSection />
    </>
  )
}
