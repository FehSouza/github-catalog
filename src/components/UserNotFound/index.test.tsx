import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { UserNotFound } from '.'

describe('UserNotFound component', () => {
  it('Should render UserNotFound component', () => {
    render(<UserNotFound />)
    expect(screen.getByTestId('user-not-found')).toBeVisible()
    expect(screen.getByTestId('user-not-found')).toBeInTheDocument()
  })
})
