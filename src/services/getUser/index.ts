import { User } from '@types'
import { api, baseURL } from 'api'
import { AxiosError } from 'axios'
import { MOCK_GET_USER } from 'mocks'
import { HttpResponse, delay, http } from 'msw'

export const getUser = async (user: string) => {
  try {
    const response = await api.get<User>(`/users/${user}`)
    const result = response.data
    return result
  } catch (error) {
    if (error instanceof AxiosError) throw { status: error.response?.status, message: error.message }
  }
}

export const mockGetUser = http.get(`${baseURL}/users/:user`, async () => {
  await delay()
  return HttpResponse.json(MOCK_GET_USER)
})
