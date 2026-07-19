import portrait from '../assets/portrait.jpg'
import { links } from '../data/links'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" aria-label="Intro" className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.kicker}>Frontend Engineer</p>
          <h1 className={styles.name}>Soheila Ghayour Kazemi</h1>
          <p className={styles.tagline}>
            I build complex, data-heavy interfaces — SQL query builders, KPI
            dashboards, and data visualization.
          </p>
          <div className={styles.social}>
            <a href={links.linkedin} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={links.github} aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
          <div className={styles.ctas}>
            <a href="#work" className={styles.primary}>
              View work
            </a>
            <a href={links.resumePdf} className={styles.secondary} download>
              Download resume
            </a>
          </div>
        </div>
        <img
          src={portrait}
          alt="Portrait of Soheila Ghayour Kazemi"
          className={styles.portrait}
          width="320"
          height="320"
        />
      </div>
    </section>
  )
}
