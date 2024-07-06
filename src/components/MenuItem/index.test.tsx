import { fireEvent, render, screen } from 'utils/testUtils'
import { describe, expect, it } from 'vitest'
import { MenuItem } from '.'

describe('MenuItem component', () => {
  it('Should render MenuItem component', async () => {
    render(<MenuItem name="Test" link="/test" ariaLabel="Test" index={0} />)
    expect(screen.getByTestId('menu-item-0')).toBeVisible()
    expect(screen.getByTestId('menu-item-0')).toBeInTheDocument()
    expect(screen.getByTestId('menu-item-link-0')).toBeVisible()
    expect(screen.getByTestId('menu-item-link-0')).toBeInTheDocument()
  })

  it('Should navigate when clicking on a menu item', async () => {
    render(<MenuItem name="Test" link="/test" ariaLabel="Test" index={0} />, {
      initialProps: { routes: ['/test'] },
    })

    const link = screen.getByTestId('menu-item-link-0')
    expect(link.classList.contains('active')).toBe(false)
    fireEvent.click(link)

    expect(screen.getByTestId('menu-item-link-0').classList.contains('active')).toBe(true)
  })

  it('Should not render MenuItem component because some prop is missing', () => {
    // Name
    const { rerender } = render(<MenuItem name="" link="/test" ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name={undefined} link="/test" ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name={null} link="/test" ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')

    // Link
    rerender(<MenuItem name="Test" link="" ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name="Test" link={undefined} ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name="Test" link={null} ariaLabel="Test" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')

    // Aria label
    rerender(<MenuItem name="Test" link="/test" ariaLabel="" index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name="Test" link="/test" ariaLabel={undefined} index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
    // @ts-ignore
    rerender(<MenuItem name="Test" link="/test" ariaLabel={null} index={0} />)
    expect(() => screen.getByTestId('menu-item-0')).toThrow('Unable to find an element')
  })
})
