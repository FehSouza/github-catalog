import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Logo } from '.'

describe('Logo component', () => {
  it('Should render Logo component', () => {
    render(<Logo />)
    expect(screen.getByTestId('logo')).toBeVisible()
  })
})
