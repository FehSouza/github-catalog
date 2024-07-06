import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Footer } from '.'

describe('Footer component', () => {
  it('Should render the Footer component', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeVisible()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('Should render the copyright with the correct year', () => {
    const date = new Date()
    const year = date.getFullYear().toString()

    render(<Footer />)
    const copyrightText = screen.getByTestId('footer-copyright')
    expect(copyrightText).toBeVisible()
    expect(copyrightText).toBeInTheDocument()
    expect(copyrightText.textContent?.includes(year)).toBe(true)
  })
})
