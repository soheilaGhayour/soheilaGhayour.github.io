import { links } from '../data/links'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Contact</h2>
      <p className={styles.line}>
        Based in Ingolstadt, open to relocation within Germany.
      </p>
      <a href={`mailto:${links.email}`} className={styles.email}>
        {links.email}
      </a>
      <div className={styles.links}>
        <a href={links.linkedin}>
          <LinkedInIcon size={18} /> LinkedIn
        </a>
        <a href={links.github}>
          <GitHubIcon size={18} /> GitHub
        </a>
        <a href={`mailto:${links.email}`}>
          <MailIcon size={18} /> Email
        </a>
      </div>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Soheila Ghayour Kazemi</span>
        <a href={links.sourceRepo}>Site source on GitHub</a>
      </footer>
    </section>
  )
}
