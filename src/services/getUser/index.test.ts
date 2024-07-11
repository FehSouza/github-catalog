import { MOCK_GET_USER } from 'mocks'
import { describe, expect, it } from 'vitest'
import { getUser } from '.'

describe('getUser', () => {
  it('Should return a valid result', async () => {
    const SUT = await getUser('test')
    expect(SUT).toStrictEqual(MOCK_GET_USER)
  })

  it('Should return an unexpected error', async () => {
    await expect(async () => await getUser('error')).rejects.toThrow('Request failed with status code 403')
  })

  it('Should return a not found error', async () => {
    await expect(async () => await getUser('notFound')).rejects.toThrow('Request failed with status code 404')
  })
})
