import { MOCK_GET_USER } from 'mocks'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Home, useHome } from '.'

describe('Home page', () => {
  it('Should render Home page', () => {
    render(<Home />)
    expect(screen.getByTestId('home-page')).toBeVisible()
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  it('Should render Home page with not found', async () => {
    render(<Home />, { initialProps: { entry: ['/?userLogin=notFound'] } })
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
  })

  it('Should render Home page with error', async () => {
    render(<Home />, { initialProps: { entry: ['/?userLogin=error'] } })
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeVisible())
  })

  it('Should render Home page with a user', async () => {
    render(<Home />, { initialProps: { entry: ['/?userLogin=FehSouza'] } })
    await waitFor(() => expect(screen.getByTestId('user-card')).toBeVisible())
  })

  it('Should call the handleRequestUser function', async () => {
    const { result } = renderHook(useHome)

    act(() => result.current.setValue('test'))
    act(() => result.current.handleRequestUser())

    await waitFor(() => expect(result.current.data).toStrictEqual(MOCK_GET_USER))
  })
})
