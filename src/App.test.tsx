import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'
import { caseStudies } from './data/caseStudies'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('home page', () => {
  it('shows the name and positioning headline', () => {
    renderAt('/')
    expect(
      screen.getByRole('heading', { name: /soheila ghayour kazemi/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/data-heavy interfaces/i)).toBeInTheDocument()
  })

  it('has resume download and contact links', () => {
    renderAt('/')
    const resume = screen.getByRole('link', { name: /download resume/i })
    expect(resume).toHaveAttribute('href', '/resume.pdf')
    expect(
      screen.getByRole('link', { name: /soheilaghayourkazemi@gmail\.com/i }),
    ).toHaveAttribute('href', 'mailto:soheilaghayourkazemi@gmail.com')
    expect(screen.getAllByRole('link', { name: /linkedin/i }).length)
      .toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /github/i }).length)
      .toBeGreaterThan(0)
  })

  it('renders skills groups from the resume', () => {
    renderAt('/')
    for (const group of [
      /languages/i,
      /frameworks/i,
      /apis & data/i,
      /testing & tooling/i,
    ]) {
      expect(screen.getByRole('heading', { name: group })).toBeInTheDocument()
    }
  })

  it('renders all five sections with nav links to them', () => {
    renderAt('/')
    for (const title of [/about/i, /selected work/i, /skills/i, /contact/i]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const nav = screen.getByRole('navigation', { name: /main/i })
    for (const label of ['Home', 'About', 'Work', 'Skills', 'Contact']) {
      expect(nav).toHaveTextContent(label)
    }
  })

  it('renders the career timeline with employers', () => {
    renderAt('/')
    for (const employer of [/arashweb/i, /sinansoft/i, /valueworks/i]) {
      expect(screen.getByRole('heading', { name: employer })).toBeInTheDocument()
    }
    expect(
      screen.getAllByText(/technische hochschule ingolstadt/i).length,
    ).toBeGreaterThan(0)
  })

  it('shows a card linking to each case study', () => {
    renderAt('/')
    for (const study of caseStudies) {
      const card = screen.getByRole('link', {
        name: new RegExp(study.title, 'i'),
      })
      expect(card).toHaveAttribute('href', `/work/${study.slug}`)
    }
  })
})

describe('case study pages', () => {
  it.each(caseStudies.map((study) => [study.slug, study] as const))(
    '/work/%s renders the full SAR story',
    (slug, study) => {
      renderAt(`/work/${slug}`)
      expect(
        screen.getByRole('heading', { name: new RegExp(study.title, 'i') }),
      ).toBeInTheDocument()
      for (const heading of [
        /context/i,
        /the problem/i,
        /what i did/i,
        /outcome/i,
      ]) {
        expect(
          screen.getByRole('heading', { name: heading }),
        ).toBeInTheDocument()
      }
      expect(
        screen.getByRole('link', { name: /back to selected work/i }),
      ).toBeInTheDocument()
    },
  )

  it('renders not-found for an unknown slug', () => {
    renderAt('/work/nope')
    expect(
      screen.getByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument()
  })

  it('renders not-found for an unknown route', () => {
    renderAt('/whatever')
    expect(
      screen.getByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument()
  })
})
