import { describe, expect, it } from 'vitest'
import { formatDate } from '.'

describe('formatDate', () => {
  it('Should format the date', () => {
    const SUT = formatDate('2024-04-20T14:46:02Z')
    const expected = '20/04/2024'
    expect(SUT).toBe(expected)
  })

  it('Should return the date even if it is already formatted', () => {
    const SUT1 = formatDate('20/02/2024')
    const expected1 = '20/02/2024'
    expect(SUT1).toBe(expected1)

    const SUT2 = formatDate('2/2/2024')
    const expected2 = '02/02/2024'
    expect(SUT2).toBe(expected2)

    const SUT3 = formatDate('20/2/2024')
    const expected3 = '20/02/2024'
    expect(SUT3).toBe(expected3)

    const SUT4 = formatDate('2/20/2024')
    const expected4 = '02/20/2024'
    expect(SUT4).toBe(expected4)
  })

  it('Should return undefined when passing date as undefined or null', () => {
    // @ts-expect-error for tests
    const SUT1 = formatDate(undefined)
    const expected1 = undefined
    expect(SUT1).toBe(expected1)

    // @ts-expect-error for tests
    const SUT2 = formatDate(null)
    const expected2 = undefined
    expect(SUT2).toBe(expected2)
  })

  it('Should return undefined when passing the date as a number', () => {
    // @ts-expect-error for tests
    const SUT = formatDate(2)
    const expected = undefined
    expect(SUT).toBe(expected)
  })

  it('Should return undefined when passing date with wrong or unexpected format', () => {
    const SUT = formatDate('2')
    const expected = undefined
    expect(SUT).toBe(expected)
  })

  it('Should return undefined when passing the year in short format (two digits)', () => {
    const SUT1 = formatDate('24-02-13')
    const expected1 = undefined
    expect(SUT1).toBe(expected1)

    const SUT2 = formatDate('13/02/24')
    const expected2 = undefined
    expect(SUT2).toBe(expected2)
  })
})
