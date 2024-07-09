import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { UserCardText } from '.'

describe('UserCardText component', () => {
  it('Should render the UserCardText component', () => {
    render(<UserCardText title="title" text="text" />)
    expect(screen.getByTestId('user-card-text')).toBeVisible()
    expect(screen.getByTestId('user-card-text')).toBeInTheDocument()
  })

  it('Should not render the UserCardText component', () => {
    const { rerender } = render(<UserCardText title="" text="text" />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')

    rerender(<UserCardText title="title" text="" />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')

    // @ts-ignore
    rerender(<UserCardText title={undefined} text="" />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<UserCardText title="" text={undefined} />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')

    // @ts-ignore
    rerender(<UserCardText title={null} text="" />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<UserCardText title="" text={null} />)
    expect(() => screen.getByTestId('user-card-text')).toThrow('Unable to find an element')
  })

  it('Should render the UserCardText with the texts used as parameters', () => {
    const { rerender } = render(<UserCardText title="title" text="text" />)
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('title')
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('text')

    rerender(<UserCardText title="1" text="2" />)
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('1')
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('2')

    // @ts-ignore
    rerender(<UserCardText title={10} text={20} />)
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('10')
    expect(screen.getByTestId('user-card-text')).toHaveTextContent('20')
  })
})
