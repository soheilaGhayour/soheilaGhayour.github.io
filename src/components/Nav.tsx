import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const items = [
  { label: 'Home', hash: '' },
  { label: 'About', hash: '#about' },
  { label: 'Work', hash: '#work' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Contact', hash: '#contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <header className={styles.bar}>
      <nav className={styles.inner} aria-label="Main">
        <Link to="/" className={styles.brand}>
          SGK
        </Link>
        <ul className={styles.links}>
          {items.map(({ label, hash }) => (
            <li key={label}>
              {onHome ? (
                <a href={hash === '' ? '#top' : hash}>{label}</a>
              ) : (
                <Link to={`/${hash}`}>{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
