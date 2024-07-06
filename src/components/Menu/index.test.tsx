import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Menu } from '.'

describe('Menu component', () => {
  it('Should render Menu component', () => {
    render(<Menu />)
    expect(screen.getByTestId('menu')).toBeVisible()
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('Should render Menu component with list', () => {
    render(<Menu />)
    expect(screen.getByTestId('menu-list')).toBeVisible()
    expect(screen.getByTestId('menu-list')).toBeInTheDocument()
  })
})
