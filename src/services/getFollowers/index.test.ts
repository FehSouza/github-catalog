import { MOCK_GET_FOLLOWERS } from 'mocks'
import { describe, expect, it } from 'vitest'
import { getFollowers } from '.'

describe('getFollowers', () => {
  it('Should return a valid result', async () => {
    const SUT1 = await getFollowers('test', 1)
    expect(SUT1).toStrictEqual(MOCK_GET_FOLLOWERS)

    // @ts-expect-error for tests
    const SUT2 = await getFollowers('test')
    expect(SUT2).toStrictEqual(MOCK_GET_FOLLOWERS)

    // @ts-expect-error for tests
    const SUT3 = await getFollowers('test', '')
    expect(SUT3).toStrictEqual(MOCK_GET_FOLLOWERS)
  })

  it('Should return an unexpected error', async () => {
    await expect(async () => await getFollowers('error', 1)).rejects.toThrow('Request failed with status code 403')
  })

  it('Should return a not found error', async () => {
    await expect(async () => await getFollowers('notFound', 1)).rejects.toThrow('Request failed with status code 404')
  })

  it('Should return empty followers', async () => {
    const SUT = await getFollowers('noData', 1)
    expect(SUT).toStrictEqual([])
  })
})
