import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import { getCaseStudy } from '../data/caseStudies'
import NotFoundPage from './NotFoundPage'
import styles from './CaseStudyPage.module.css'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = slug ? getCaseStudy(slug) : undefined

  if (!study) {
    return <NotFoundPage />
  }

  return (
    <>
      <Nav />
      <main
        className={`section container ${styles.page}`}
        style={{ '--study-accent': study.accent } as React.CSSProperties}
      >
        <p className={styles.meta}>
          {study.company} · {study.role} · {study.period}
        </p>
        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.hook}>{study.hook}</p>
        <ul className={styles.tags}>
          {study.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <h2 className={styles.heading}>Context</h2>
        <p className={styles.body}>{study.context}</p>

        <h2 className={styles.heading}>The problem</h2>
        <p className={styles.body}>{study.situation}</p>

        <h2 className={styles.heading}>What I did</h2>
        {study.action.map((paragraph) => (
          <p key={paragraph} className={styles.body}>
            {paragraph}
          </p>
        ))}

        <h2 className={styles.heading}>Outcome</h2>
        {study.result.map((paragraph) => (
          <p key={paragraph} className={styles.body}>
            {paragraph}
          </p>
        ))}

        <Link to="/#work" className={styles.back}>
          ← Back to Selected Work
        </Link>
      </main>
    </>
  )
}
