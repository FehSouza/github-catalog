import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { CardLink } from '.'

describe('CardLink component', () => {
  it('Should render CardLink component', () => {
    render(<CardLink link="/test" text="Test" />)
    expect(screen.getByTestId('card-link')).toBeVisible()
    expect(screen.getByTestId('card-link')).toBeInTheDocument()
  })
})
