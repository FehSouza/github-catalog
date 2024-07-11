import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { NotFoundError } from '.'

describe('UserNotFound component', () => {
  it('Should render UserNotFound component', () => {
    render(<NotFoundError />)
    expect(screen.getByTestId('not-found-error')).toBeVisible()
    expect(screen.getByTestId('not-found-error')).toBeInTheDocument()
  })
})
