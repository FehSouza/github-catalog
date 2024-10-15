import { useLocation } from 'react-router-dom'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { SearchContainer, useSearchContainer } from '.'
import { languages } from 'i18n/languages'

describe.only('SearchContainer component', () => {
  it('Should render SearchContainer component', () => {
    render(<SearchContainer />)
    expect(screen.getByTestId('search-container')).toBeVisible()
    expect(screen.getByTestId('search-container')).toBeInTheDocument()
  })

  it('Should render SearchContainer component with title', () => {
    render(<SearchContainer />, { initialProps: { entry: ['/repositorios'] } })
    expect(screen.getByTestId('search-container-title')).toBeVisible()
    expect(screen.getByTestId('search-container-title')).toBeInTheDocument()

    const text = languages['en-US'].translation.Default.repositories
    expect(screen.getByTestId('search-container-title')).toHaveTextContent(text)
  })

  it('Should render SearchContainer component without title', () => {
    render(<SearchContainer />, { initialProps: { entry: ['/test'] } })
    expect(() => screen.getByTestId('search-container-title')).toThrow('Unable to find an element')
  })

  it('Should navigate to a user`s search', async () => {
    const { result } = renderHook(
      () => {
        const detail = useSearchContainer()
        const location = useLocation()
        return { detail, location }
      },
      { initialProps: { entry: ['/user'], routes: ['/user', '/user/:userLogin'] } }
    )

    act(() => result.current.detail.setValue('userTest'))
    act(() => result.current.detail.handleSearch())

    await waitFor(() => expect(result.current.location.pathname).toBe('/user/userTest'))
  })

  it('Should navigate to a repository`s search', async () => {
    const { result } = renderHook(
      () => {
        const details = useSearchContainer()
        const location = useLocation()
        return { details, location }
      },
      { initialProps: { entry: ['/repositorios'], routes: ['/repositorios', '/repositorios/:userLogin'] } }
    )

    act(() => result.current.details.setValue('repositoryTest'))
    act(() => result.current.details.handleSearch())

    await waitFor(() => expect(result.current.location.pathname).toBe('/repositorios/repositoryTest'))
  })

  it('Should navigate to a follower`s search', async () => {
    const { result } = renderHook(
      () => {
        const details = useSearchContainer()
        const location = useLocation()
        return { details, location }
      },
      { initialProps: { entry: ['/seguidores'], routes: ['/seguidores', '/seguidores/:userLogin'] } }
    )

    act(() => result.current.details.setValue('followerTest'))
    act(() => result.current.details.handleSearch())

    await waitFor(() => expect(result.current.location.pathname).toBe('/seguidores/followerTest'))
  })
})
