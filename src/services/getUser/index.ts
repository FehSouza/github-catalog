import { User } from '@types'
import { api, baseURL } from 'api'
import { MOCK_GET_USER, MOCK_GET_USER_FORBIDDEN, MOCK_GET_USER_NOT_FOUND } from 'mocks'
import { HttpResponse, delay, http } from 'msw'

export const getUser = async (user: string) => {
  const response = await api.get<User>(`/users/${user}`)
  const result = response.data
  return result
}

export const mockGetUser = http.get(`${baseURL}/users/:user`, async ({ params }) => {
  const id = params.user
  await delay()

  if (id === 'error') return HttpResponse.json(MOCK_GET_USER_FORBIDDEN, { status: 403 })
  if (id === 'notFound') return HttpResponse.json(MOCK_GET_USER_NOT_FOUND, { status: 404 })
  return HttpResponse.json(MOCK_GET_USER)
})
