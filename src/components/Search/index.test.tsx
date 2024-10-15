import { languages } from 'i18n/languages'
import { fireEvent, render, screen } from 'utils/testUtils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Search } from '.'

const trigger = vi.fn()
const originalTimeout = setTimeout

describe('Search component', () => {
  beforeEach(() => {
    window.setTimeout = ((fn: (...params: any) => void, _ms?: number | undefined, ...args: any[]): number => {
      fn(...args)
      return 1
    }) as any
  })

  afterEach(() => {
    window.setTimeout = originalTimeout
  })

  it('Should render the Search component', () => {
    render(<Search setValue={() => {}} handleSearch={trigger} />)
    expect(screen.getByTestId('search')).toBeVisible()
    expect(screen.getByTestId('search')).toBeInTheDocument()
  })

  it('Should render the Search component with text button or loading button', () => {
    const textButton = languages['en-US'].translation.Home.textButton

    render(<Search setValue={() => {}} handleSearch={trigger} />)
    expect(screen.getByTestId('search')).toHaveTextContent(textButton)
  })

  it('Should call the setValue function passed as a parameter', () => {
    const onChangeFn = vi.fn()

    render(<Search setValue={onChangeFn} handleSearch={trigger} />)
    const input = screen.getByRole('searchbox')
    expect(input).toBeVisible()
    expect(input).toBeInTheDocument()
    expect(onChangeFn).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: 'test' } })
    expect(onChangeFn).toHaveBeenCalled()
  })

  it('Should call the trigger function passed as a parameter - input', () => {
    const onKeyUpFn = vi.fn()

    render(<Search setValue={() => {}} handleSearch={onKeyUpFn} />)
    const input = screen.getByRole('searchbox')
    expect(onKeyUpFn).not.toHaveBeenCalled()

    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(onKeyUpFn).toHaveBeenCalled()
  })

  it('Should call the trigger function passed as a parameter - button', () => {
    const onClickFn = vi.fn()

    render(<Search setValue={() => {}} handleSearch={onClickFn} />)
    const button = screen.getByRole('search')
    expect(button).toBeVisible()
    expect(button).toBeInTheDocument()
    expect(onClickFn).not.toHaveBeenCalled()

    fireEvent.click(button)
    expect(onClickFn).toHaveBeenCalled()
  })
})
