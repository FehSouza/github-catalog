import { Follower } from '@types'
import { api, baseURL } from 'api'
import { MOCK_GET_FOLLOWERS, MOCK_GET_FOLLOWERS_FORBIDDEN, MOCK_GET_FOLLOWERS_NOT_FOUND } from 'mocks'
import { delay, http, HttpResponse } from 'msw'
import { ITEMS_PER_PAGE } from 'services/getRepositories'

export const getFollowers = async (user: string, page: number) => {
  const response = await api.get<Follower[]>(`/users/${user}/followers?per_page=${ITEMS_PER_PAGE}&page=${page ?? 1}`)
  const result = response.data
  return result
}

export const mockGetFollowers = http.get(`${baseURL}/users/:user/followers`, async ({ params, request }) => {
  const id = params.user
  const searchParams = new URLSearchParams(request.url)
  const page = searchParams.get('page')
  await delay()

  if (id === 'noData') return HttpResponse.json([], { status: 200 })
  if (id === 'error') return HttpResponse.json(MOCK_GET_FOLLOWERS_FORBIDDEN, { status: 403 })
  if (id === 'notFound') return HttpResponse.json(MOCK_GET_FOLLOWERS_NOT_FOUND, { status: 404 })

  const pageFormatted = !!page ? Number(page.replace(/\D/g, '')) : 1

  const start = (pageFormatted - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const paginatedFollowers = MOCK_GET_FOLLOWERS.slice(start, end)
  return HttpResponse.json(paginatedFollowers)
})
