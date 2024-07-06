import { render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { Logotype } from '.'

describe('Logotype component', () => {
  it('Should render Logotype component', () => {
    render(<Logotype />)
    expect(screen.getByTestId('logotype')).toBeVisible()
  })
})
