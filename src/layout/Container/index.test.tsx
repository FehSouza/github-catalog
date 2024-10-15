import { act, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Container } from '.'

describe.only('Container layout', () => {
  it('Should render Container layout', async () => {
    const promise = Promise.resolve()

    await act(() => render(<Container />))
    expect(screen.getByTestId('container-layout')).toBeVisible()
    expect(screen.getByTestId('container-layout')).toBeInTheDocument()

    await act(() => promise)
  })
})
