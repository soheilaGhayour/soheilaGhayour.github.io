import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../data/timeline'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="section container">
      <h2 className="section-title">About</h2>
      <p className={styles.intro}>
        I’m a frontend engineer with 5+ years of building the hard kind of UI —
        SQL query builders, KPI dashboards, pivot tables, and rich-text editors.
        Since 2024 I live in Ingolstadt, Germany, where I’m completing an M.Sc.
        in AI in Autonomous Systems at Technische Hochschule Ingolstadt while
        working on a business-intelligence platform. I work in English-speaking
        teams and I’m open to relocation within Germany.
      </p>
      <ol className={styles.timeline}>
        {timeline.map((entry, index) => (
          <motion.li
            key={`${entry.year}-${entry.title}`}
            className={styles.entry}
            initial={
              reducedMotion ? false : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (index % 2) * 0.05 }}
          >
            <span className={styles.year}>{entry.year}</span>
            <div className={styles.card}>
              <h3 className={styles.title}>{entry.title}</h3>
              {entry.subtitle && (
                <p className={styles.subtitle}>{entry.subtitle}</p>
              )}
              <ul className={styles.highlights}>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
