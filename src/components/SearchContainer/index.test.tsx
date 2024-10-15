import { useLocation } from 'react-router-dom'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { SearchContainer, useSearchContainer } from '.'
import { languages } from 'i18n/languages'

describe('SearchContainer component', () => {
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

  it.skip('Should hook', async () => {
    const { result } = renderHook(
      () => {
        const detail = useSearchContainer()
        const location = useLocation()
        return { detail, location }
      },
      { initialProps: { entry: ['/repositorios'], routes: ['/repositorios', '/repositorios/:userLogin'] } }
    )

    act(() => {
      result.current.detail.setValue('test')
    })
    act(() => {
      result.current.detail.handleSearch()
    })

    await waitFor(() => {
      return expect(result.current.location.pathname).toBe('/repositorios/test')
    })
  })
})
