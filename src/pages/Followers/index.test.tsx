import { useLocation } from 'react-router-dom'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Followers, useFollowers } from '.'

describe('Followers page', () => {
  it('Should render the Followers page with followers', async () => {
    render(<Followers />, { initialProps: { entry: ['/seguidores/test'], routes: ['/seguidores/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('followers-page')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('followers-page')).toBeInTheDocument())
  })

  it('Should render the Followers page with not found - 404', async () => {
    render(<Followers />, {
      initialProps: { entry: ['/seguidores/notFound'], routes: ['/seguidores/:userLogin'] },
    })

    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeInTheDocument())
  })

  it('Should render the Followers page with not found - 404 - without userLogin', async () => {
    render(<Followers />, { initialProps: { entry: ['/seguidores/'], routes: ['/seguidores/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeInTheDocument())
  })

  it('Should render the Followers page with unexpected error', async () => {
    render(<Followers />, { initialProps: { entry: ['/seguidores/error'], routes: ['/seguidores/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeInTheDocument())
  })

  it('Should render the Followers page with 0 followers', async () => {
    render(<Followers />, {
      initialProps: { entry: ['/seguidores/noData'], routes: ['/seguidores/:userLogin'] },
    })

    await waitFor(() => expect(screen.getByTestId('followers-page-no-data')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('followers-page-no-data')).toBeInTheDocument())
  })

  it('Should render the Followers page with pagination', async () => {
    const { result } = renderHook(
      () => {
        const { handlePagination } = useFollowers()
        const location = useLocation()
        return { handlePagination, location }
      },
      {
        initialProps: {
          entry: ['/seguidores/test?page=1'],
          routes: ['/seguidores/test?page=1', '/seguidores/test?page=2'],
        },
      }
    )

    expect(result.current.location.search).toBe('?page=1')

    act(() => result.current.handlePagination({} as React.ChangeEvent<unknown>, 2))
    expect(result.current.location.search).toBe('?page=2')
  })
})
