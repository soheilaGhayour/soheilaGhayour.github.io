import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Skills from '../components/Skills'
import WorkSection from '../components/WorkSection'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />

        <AboutSection />
        <WorkSection />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
