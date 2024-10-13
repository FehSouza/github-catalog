import { useLocation } from 'react-router-dom'
import { act, render, renderHook, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Details, useDetails } from '.'

describe.only('Details page', () => {
  it('Should render Details page', () => {
    render(<Details title="" />)
    expect(screen.getByTestId('details-page')).toBeVisible()
    expect(screen.getByTestId('details-page')).toBeInTheDocument()
  })

  it('Should render Details page - title', () => {
    const text1 = 'test'
    const { rerender } = render(<Details title={text1} />)
    expect(screen.getByTestId('details-page-title')).toBeVisible()
    expect(screen.getByTestId('details-page-title')).toBeInTheDocument()
    expect(screen.getByTestId('details-page-title')).toHaveRole('heading')
    expect(screen.getByTestId('details-page-title')).toHaveTextContent(text1)

    const text2 = ''
    rerender(<Details title={text2} />)
    expect(() => screen.getByTestId('details-page-title')).toThrow('Unable to find an element')
  })

  it.only('Should hook', async () => {
    const { result } = renderHook(
      () => {
        const detail = useDetails()
        const location = useLocation()
        return { detail, location }
      },
      { initialProps: { entry: ['/repositorios'], routes: ['/repositorios', '/repositorios/:userLogin'] } }
    )

    act(() => {
      result.current.detail.setValue('test')
    })
    act(() => {
      result.current.detail.handleRequestUser()
    })

    await waitFor(() => {
      console.log(JSON.stringify(result.current.location, null, 2))
      return expect(result.current.location.pathname).toBe('/repositorios/test')
    })
  })
})
