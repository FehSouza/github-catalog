import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Header } from '.'

describe('Header component', () => {
  it('Should render Header component', () => {
    render(<Header />)
    expect(screen.getByTestId('header')).toBeVisible()
  })

  it('Should render Header component - container', () => {
    render(<Header />)
    expect(screen.getByTestId('header-container')).toBeVisible()
  })
})
