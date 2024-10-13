import { act, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Container } from '.'

describe('Container component', () => {
  it('Should render Container component', async () => {
    const promise = Promise.resolve()

    await act(() => render(<Container />))
    expect(screen.getByTestId('container-box')).toBeVisible()
    expect(screen.getByTestId('container-box')).toBeInTheDocument()

    await act(() => promise)
  })
})
