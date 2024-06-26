import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Menu } from '.'

describe('Menu component', () => {
  it('Should render Menu component', () => {
    render(<Menu />)
    expect(screen.getByTestId('menu')).toBeVisible()
  })

  it('Should render Menu component with list', () => {
    render(<Menu />)
    expect(screen.getByTestId('menu-list')).toBeVisible()
  })
})
