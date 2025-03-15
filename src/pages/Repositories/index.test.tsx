import { useRepositories } from 'hooks'
import { useLocation } from 'react-router-dom'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Repositories } from '.'

describe('Repositories page', () => {
  it('Should render the Repositories page with repositories', async () => {
    render(<Repositories />, { initialProps: { entry: ['/repositorios/test'], routes: ['/repositorios/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('repositories-page')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('repositories-page')).toBeInTheDocument())
  })

  it('Should render the Repositories page with not found - 404', async () => {
    render(<Repositories />, {
      initialProps: { entry: ['/repositorios/notFound'], routes: ['/repositorios/:userLogin'] },
    })

    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeInTheDocument())
  })

  it('Should render the Repositories page with not found - 404 - without userLogin', async () => {
    render(<Repositories />, { initialProps: { entry: ['/repositorios/'], routes: ['/repositorios/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeInTheDocument())
  })

  it('Should render the Repositories page with unexpected error', async () => {
    render(<Repositories />, { initialProps: { entry: ['/repositorios/error'], routes: ['/repositorios/:userLogin'] } })

    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeInTheDocument())
  })

  it('Should render the Repositories page with 0 repositories', async () => {
    render(<Repositories />, {
      initialProps: { entry: ['/repositorios/noData'], routes: ['/repositorios/:userLogin'] },
    })

    await waitFor(() => expect(screen.getByTestId('repositories-page-no-data')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('repositories-page-no-data')).toBeInTheDocument())
  })

  it('Should render the Repositories page with pagination', async () => {
    const { result } = renderHook(
      () => {
        const { handlePagination } = useRepositories()
        const location = useLocation()
        return { handlePagination, location }
      },
      {
        initialProps: {
          entry: ['/repositorios/test?page=1'],
          routes: ['/repositorios/test?page=1', '/repositorios/test?page=2'],
        },
      }
    )

    expect(result.current.location.search).toBe('?page=1')

    act(() => result.current.handlePagination({} as React.ChangeEvent<unknown>, 2))
    expect(result.current.location.search).toBe('?page=2')
  })
})
