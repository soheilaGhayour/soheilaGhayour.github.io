import Nav from '../components/Nav'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="top">
        <section id="hero" aria-label="Intro" className="section container">
          <h1>Soheila Ghayour Kazemi</h1>
          <p>
            Frontend Engineer — I build complex, data-heavy interfaces: SQL
            query builders, KPI dashboards, and data visualization.
          </p>
        </section>

        <section id="about" className="section container">
          <h2 className="section-title">About</h2>
        </section>

        <section id="work" className="section container">
          <h2 className="section-title">Selected Work</h2>
        </section>

        <section id="skills" className="section container">
          <h2 className="section-title">Skills</h2>
        </section>

        <section id="contact" className="section container">
          <h2 className="section-title">Contact</h2>
        </section>
      </main>
    </>
  )
}
