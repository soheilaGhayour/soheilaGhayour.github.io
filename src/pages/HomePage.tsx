import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import RecommendationsSection from '../components/RecommendationsSection'
import Skills from '../components/Skills'
import WorkSection from '../components/WorkSection'
import { usePageMeta } from '../usePageMeta'

export default function HomePage() {
  usePageMeta(
    'Soheila Ghayour Kazemi — Frontend Engineer',
    'Frontend Engineer building complex, data-heavy interfaces: SQL query builders, KPI dashboards, and data visualization.',
  )
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />

        <AboutSection />
        <WorkSection />
        <Skills />
        <RecommendationsSection />
        <Contact />
      </main>
    </>
  )
}
