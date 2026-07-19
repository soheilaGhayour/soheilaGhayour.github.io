import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Skills from '../components/Skills'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />

        <section id="about" className="section container">
          <h2 className="section-title">About</h2>
        </section>

        <section id="work" className="section container">
          <h2 className="section-title">Selected Work</h2>
        </section>

        <Skills />
        <Contact />
      </main>
    </>
  )
}
