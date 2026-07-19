import { skillGroups } from '../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Skills</h2>
      <div className={styles.grid}>
        {skillGroups.map(({ group, items }) => (
          <div key={group} className={styles.card}>
            <h3 className={styles.group}>{group}</h3>
            <ul className={styles.chips}>
              {items.map((item) => (
                <li key={item} className={styles.chip}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
