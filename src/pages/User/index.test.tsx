import { render, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { User } from '.'

describe('User page', () => {
  it('Should render User page', async () => {
    render(<User />, { initialProps: { entry: ['/user/test'], routes: ['/user/:userLogin'] } })
    await waitFor(() => expect(screen.getByTestId('user-card')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('user-card')).toBeInTheDocument())
  })

  it('Should render User page with not found', async () => {
    render(<User />, { initialProps: { entry: ['/user/notFound'], routes: ['/user/:userLogin'] } })
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('not-found-error')).toBeInTheDocument())
  })

  it('Should render User page with unexpected error', async () => {
    render(<User />, { initialProps: { entry: ['/user/error'], routes: ['/user/:userLogin'] } })
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeInTheDocument())
  })

  it('Should render User page without userLogin - unexpected error', async () => {
    render(<User />, { initialProps: { entry: ['/user/'], routes: ['/user/:userLogin'] } })
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeVisible())
    await waitFor(() => expect(screen.getByTestId('unexpected-error')).toBeInTheDocument())
  })
})
