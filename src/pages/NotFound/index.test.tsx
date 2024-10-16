import { act, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { NotFound } from '.'

describe('NotFound page', () => {
  it('Should render NotFound page', async () => {
    const promise = Promise.resolve()

    await act(() => render(<NotFound />))
    expect(screen.getByTestId('not-found-page')).toBeVisible()
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument()

    await act(() => promise)
  })
})
