import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Loading } from '.'

describe('Loading component', () => {
  it('Should render Loading component', () => {
    render(<Loading />)
    expect(screen.getByTestId('loading')).toBeVisible()
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
