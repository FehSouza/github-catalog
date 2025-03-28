import { MOCK_GET_FOLLOWERS } from 'mocks'
import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { FollowerCard } from '.'

describe('FollowerCard component', () => {
  it('Should render FollowerCard component', () => {
    const index = 1
    render(<FollowerCard follower={MOCK_GET_FOLLOWERS[0]} index={index} />)
    expect(screen.getByTestId(`follower-card-${index}`)).toBeVisible()
    expect(screen.getByTestId(`follower-card-${index}`)).toBeInTheDocument()
  })

  it('Should render the FollowerCard component with image or with icon', () => {
    const { rerender } = render(<FollowerCard follower={MOCK_GET_FOLLOWERS[0]} index={1} />)
    expect(() => screen.getByTestId('follower-card-without-image')).toThrow('Unable to find an element')
    expect(screen.getByTestId('follower-card-image')).toBeVisible()

    const NEW_MOCK_GET_FOLLOWER = { ...MOCK_GET_FOLLOWERS[0], avatar_url: null }
    rerender(<FollowerCard follower={NEW_MOCK_GET_FOLLOWER} index={1} />)
    expect(screen.getByTestId('follower-card-without-image')).toBeVisible()
    expect(() => screen.getByTestId('follower-card-image')).toThrow('Unable to find an element')
  })
})
