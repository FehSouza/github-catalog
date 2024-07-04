import { User } from '@types'
import { api } from 'api'

export const getUser = async (user: string) => {
  const response = await api.get<User>(`/users/${user}`)
  const result = response.data
  return result
}
