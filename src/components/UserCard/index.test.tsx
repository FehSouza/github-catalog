import { languages } from 'i18n/languages'
import { MOCK_GET_USER } from 'mocks'
import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { UserCard } from '.'

describe('UserCard component', () => {
  it('Should render the UserCard component', () => {
    render(<UserCard user={MOCK_GET_USER} />)
    expect(screen.getByTestId('user-card')).toBeVisible()
    expect(screen.getByTestId('user-card')).toBeInTheDocument()
  })

  it('Should render the UserCard component with image or with icon', () => {
    const { rerender } = render(<UserCard user={MOCK_GET_USER} />)
    expect(() => screen.getByTestId('user-card-without-image')).toThrow('Unable to find an element')
    expect(screen.getByTestId('user-card-image')).toBeVisible()

    const NEW_MOCK_GET_USER = { ...MOCK_GET_USER, avatar_url: null }
    rerender(<UserCard user={NEW_MOCK_GET_USER} />)
    expect(screen.getByTestId('user-card-without-image')).toBeVisible()
    expect(() => screen.getByTestId('user-card-image')).toThrow('Unable to find an element')
  })

  it('Should render the UserCard component with name or username in the image alt', () => {
    const { rerender } = render(<UserCard user={MOCK_GET_USER} />)
    const image1 = screen.getByTestId('user-card-image')
    expect(image1.getAttribute('alt')?.includes(MOCK_GET_USER.name)).toBe(true)

    const NEW_MOCK_GET_USER = { ...MOCK_GET_USER, name: null }
    rerender(<UserCard user={NEW_MOCK_GET_USER} />)
    const image2 = screen.getByTestId('user-card-image')
    expect(image2.getAttribute('alt')?.includes(MOCK_GET_USER.login)).toBe(true)
  })

  it('Should render the UserCard component with the right number of followers', () => {
    const { rerender } = render(<UserCard user={MOCK_GET_USER} />)
    const followers1 = MOCK_GET_USER.followers.toString()
    const [_, textFollowers] = languages['en-US'].translation.Home.followers_other.split('}} ')
    expect(screen.getByTestId('user-card')).toHaveTextContent(`${followers1} ${textFollowers}`)

    const NEW_MOCK_GET_USER = { ...MOCK_GET_USER, followers: 1 }
    rerender(<UserCard user={NEW_MOCK_GET_USER} />)
    const followers2 = NEW_MOCK_GET_USER.followers.toString()
    const [__, textFollower] = languages['en-US'].translation.Home.followers_one.split('}} ')
    expect(screen.getByTestId('user-card')).toHaveTextContent(`${followers2} ${textFollower}`)
  })

  it('Should render the UserCard component with the right number of repositories', () => {
    const { rerender } = render(<UserCard user={MOCK_GET_USER} />)
    const repositories1 = MOCK_GET_USER.public_repos.toString()
    const [_, textRepositories] = languages['en-US'].translation.Home.repositories_other.split('}} ')
    expect(screen.getByTestId('user-card')).toHaveTextContent(`${repositories1} ${textRepositories}`)

    const NEW_MOCK_GET_USER = { ...MOCK_GET_USER, public_repos: 1 }
    rerender(<UserCard user={NEW_MOCK_GET_USER} />)
    const repositories2 = NEW_MOCK_GET_USER.public_repos.toString()
    const [__, textRepository] = languages['en-US'].translation.Home.repositories_one.split('}} ')
    expect(screen.getByTestId('user-card')).toHaveTextContent(`${repositories2} ${textRepository}`)
  })
})
