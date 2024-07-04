import { User } from '@types'
import { api, ENABLE_MOCK } from 'api'
import { MOCK_GET_USER } from 'mocks'

export const getUser = async (user: string) => {
  if (ENABLE_MOCK) return MOCK_GET_USER
  const response = await api.get<User>(`/users/${user}`)
  const result = response.data
  return result
}
