import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function NotFoundPage() {
  return (
    <>
      <Nav />
      <main className="section container" style={{ paddingTop: '8rem' }}>
        <h1>Page not found</h1>
        <p style={{ color: 'var(--color-muted)', margin: '1rem 0 2rem' }}>
          This page doesn’t exist.
        </p>
        <Link to="/">← Back to the homepage</Link>
      </main>
    </>
  )
}
