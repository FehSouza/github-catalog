import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { CardText } from '.'

describe('CardText component', () => {
  it('Should render the CardText component', () => {
    render(<CardText title="title" text="text" />)
    expect(screen.getByTestId('card-text')).toBeVisible()
    expect(screen.getByTestId('card-text')).toBeInTheDocument()
  })

  it('Should not render the CardText component', () => {
    const { rerender } = render(<CardText title="" text="text" />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')

    rerender(<CardText title="title" text="" />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')

    // @ts-expect-error for tests
    rerender(<CardText title={undefined} text="" />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')
    // @ts-expect-error for tests
    rerender(<CardText title="" text={undefined} />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')

    // @ts-expect-error for tests
    rerender(<CardText title={null} text="" />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')
    // @ts-expect-error for tests
    rerender(<CardText title="" text={null} />)
    expect(() => screen.getByTestId('card-text')).toThrow('Unable to find an element')
  })

  it('Should render the CardText with the texts used as parameters', () => {
    const { rerender } = render(<CardText title="title" text="text" />)
    expect(screen.getByTestId('card-text')).toHaveTextContent('title')
    expect(screen.getByTestId('card-text')).toHaveTextContent('text')

    rerender(<CardText title="1" text="2" />)
    expect(screen.getByTestId('card-text')).toHaveTextContent('1')
    expect(screen.getByTestId('card-text')).toHaveTextContent('2')

    // @ts-expect-error for tests
    rerender(<CardText title={10} text={20} />)
    expect(screen.getByTestId('card-text')).toHaveTextContent('10')
    expect(screen.getByTestId('card-text')).toHaveTextContent('20')
  })
})
