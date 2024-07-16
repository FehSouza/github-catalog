import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { UserCardLink } from '.'

describe('UserCardLink component', () => {
  it('Should render UserCardLink component', () => {
    render(<UserCardLink link="/test" text="Test" />)
    expect(screen.getByTestId('user-card-link')).toBeVisible()
    expect(screen.getByTestId('user-card-link')).toBeInTheDocument()
  })
})
