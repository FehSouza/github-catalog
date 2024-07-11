import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { UnexpectedError } from '.'

describe('UnexpectedError component', () => {
  it('Should render UnexpectedError component', () => {
    render(<UnexpectedError />)
    expect(screen.getByTestId('unexpected-error')).toBeVisible()
    expect(screen.getByTestId('unexpected-error')).toBeInTheDocument()
  })
})
