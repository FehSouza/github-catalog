import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Logo } from '.'

describe('Logo component', () => {
  it('Should render Logo component', () => {
    render(<Logo />)
    expect(screen.getByTestId('logo')).toBeVisible()
  })

  it('Should render Logo component with icon', () => {
    render(<Logo />)
    expect(screen.getByTestId('logo-icon')).toBeVisible()
  })

  it('Should render Logo component without text', () => {
    render(<Logo />)
    expect(() => screen.getByTestId('logo-text')).toThrow('Unable to find an element by')
  })

  it('Should render Logo component with text', () => {
    render(<Logo hasText />)
    expect(screen.getByTestId('logo-text')).toBeVisible()
    expect(screen.getByText(/github catalog/i)).toBeVisible()
  })

  it('Should render Logo component as a link tag', () => {
    render(<Logo />)
    expect(screen.getByTestId('logo').tagName).toBe('A')
  })
})
