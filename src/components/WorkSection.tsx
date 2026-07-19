import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import styles from './WorkSection.module.css'

export default function WorkSection() {
  return (
    <section id="work" className="section container">
      <h2 className="section-title">Selected Work</h2>
      <div className={styles.grid}>
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            to={`/work/${study.slug}`}
            className={styles.card}
            style={{ '--card-accent': study.accent } as React.CSSProperties}
          >
            <span className={styles.mark} aria-hidden="true" />
            <h3 className={styles.title}>{study.title}</h3>
            <p className={styles.hook}>{study.hook}</p>
            <ul className={styles.tags}>
              {study.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <span className={styles.more}>Read case study →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
