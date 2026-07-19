import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

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
})
