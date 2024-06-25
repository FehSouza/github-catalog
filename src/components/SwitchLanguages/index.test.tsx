import { fireEvent, render, screen, waitFor } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { SwitchLanguages } from '.'

describe('SwitchLanguages component', () => {
  it('Should render SwitchLanguages component', () => {
    render(<SwitchLanguages />)
    expect(screen.getByTestId('switch-languages')).toBeVisible()
  })

  it('Should have at least two languages', () => {
    render(<SwitchLanguages />)
    expect(screen.getByTestId('switch-languages-item-0')).toBeInTheDocument()
    expect(screen.getByTestId('switch-languages-item-1')).toBeInTheDocument()
  })

  it('Should show the language options', () => {
    render(<SwitchLanguages />)
    const button = screen.getByTestId('switch-languages')
    fireEvent.focus(button)
    waitFor(() => expect(screen.getByTestId('switch-languages-item-0')).toBeVisible())
    waitFor(() => expect(screen.getByTestId('switch-languages-item-1')).toBeVisible())
  })

  it('Should change the translation', () => {
    render(<SwitchLanguages />)
    const button = screen.getByTestId('switch-languages')
    fireEvent.focus(button)
    const language0 = screen.getByTestId('switch-languages-item-0')
    const language1 = screen.getByTestId('switch-languages-item-1')

    fireEvent.click(language0)

    waitFor(() => expect(screen.getByTestId('switch-languages-item-0').ariaLabel).not.toBe(language0.ariaLabel))
    waitFor(() => expect(screen.getByTestId('switch-languages-item-1').ariaLabel).not.toBe(language1.ariaLabel))
  })
})
