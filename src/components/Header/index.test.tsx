import { act, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Header } from '.'

describe('Header component', () => {
  it('Should render Header component', async () => {
    const promise = Promise.resolve()

    await act(() => render(<Header />))
    expect(screen.getByTestId('header')).toBeVisible()
    expect(screen.getByTestId('header')).toBeInTheDocument()

    await act(() => promise)
  })
})
