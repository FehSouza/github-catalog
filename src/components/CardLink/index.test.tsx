import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { CardLink } from '.'

describe('CardLink component', () => {
  it('Should render CardLink component', () => {
    render(<CardLink link="/test" text="Test" />)
    expect(screen.getByTestId('card-link')).toBeVisible()
    expect(screen.getByTestId('card-link')).toBeInTheDocument()
  })

  it('Should render CardLink component with the test id complement', () => {
    render(<CardLink link="/test" text="Test" testId='test' />)
    expect(screen.getByTestId('card-link-test')).toBeVisible()
    expect(screen.getByTestId('card-link-test')).toBeInTheDocument()
  })
})
