import { recommendations } from '../data/recommendations'
import { links } from '../data/links'
import styles from './RecommendationsSection.module.css'

export default function RecommendationsSection() {
  return (
    <section id="recommendations" className="section container">
      <h2 className="section-title">Recommendations</h2>
      <div className={styles.grid}>
        {recommendations.map((rec) => (
          <figure key={rec.name} className={styles.card}>
            <blockquote className={styles.quote}>“{rec.text}”</blockquote>
            <figcaption className={styles.caption}>
              <span className={styles.name}>{rec.name}</span>
              <span className={styles.title}>{rec.title}</span>
              <span className={styles.relation}>
                {rec.relationship} · {rec.date}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.source}>
        From{' '}
        <a href={`${links.linkedin}/details/recommendations/`}>
          LinkedIn recommendations
        </a>
        , quoted verbatim.
      </p>
    </section>
  )
}
