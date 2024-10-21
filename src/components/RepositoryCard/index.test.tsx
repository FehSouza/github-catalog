import { MOCK_GET_REPOSITORIES } from 'mocks'
import { act, fireEvent, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { RepositoryCard } from '.'

describe('RepositoryCard component', () => {
  it('Should render RepositoryCard component', () => {
    render(<RepositoryCard repository={MOCK_GET_REPOSITORIES[0]} />)
    expect(screen.getByTestId('repository-card')).toBeVisible()
    expect(screen.getByTestId('repository-card')).toBeInTheDocument()
  })

  it('Should render RepositoryCard component - stars and homepage', () => {
    const { rerender } = render(<RepositoryCard repository={MOCK_GET_REPOSITORIES[0]} />)
    expect(() => screen.getByTestId('repository-card-star')).toThrow('Unable to find an element')

    rerender(<RepositoryCard repository={MOCK_GET_REPOSITORIES[1]} />)
    expect(screen.getByTestId('repository-card-star')).toBeVisible()
    expect(screen.getByTestId('repository-card-star')).toBeInTheDocument()
  })

  it('should open the descriptions when clicking the button', async () => {
    render(<RepositoryCard repository={MOCK_GET_REPOSITORIES[0]} />)
    const button = screen.getByTestId('repository-card-button')

    expect(button).toBeVisible()
    expect(() => screen.getByTestId('repository-card-description')).toThrow('Unable to find an element')

    await act(() => fireEvent.click(button))
    await act(() => expect(screen.getByTestId('repository-card-description')).toBeVisible())
  })
})
