import { describe, expect, it } from 'vitest'
import { getRepositories } from '.'
import { MOCK_GET_REPOSITORIES } from 'mocks'

describe('getRepositories', () => {
  it('Should return a valid result', async () => {
    const SUT1 = await getRepositories('test', 1)
    expect(SUT1).toStrictEqual(MOCK_GET_REPOSITORIES)

    // @ts-expect-error for tests
    const SUT2 = await getRepositories('test')
    expect(SUT2).toStrictEqual(MOCK_GET_REPOSITORIES)

    // @ts-expect-error for tests
    const SUT3 = await getRepositories('test', '')
    expect(SUT3).toStrictEqual(MOCK_GET_REPOSITORIES)
  })

  it('Should return an unexpected error', async () => {
    await expect(async () => await getRepositories('error', 1)).rejects.toThrow('Request failed with status code 403')
  })

  it('Should return a not found error', async () => {
    await expect(async () => await getRepositories('notFound', 1)).rejects.toThrow(
      'Request failed with status code 404'
    )
  })

  it('Should return empty repositories', async () => {
    const SUT = await getRepositories('noData', 1)
    expect(SUT).toStrictEqual([])
  })
})
