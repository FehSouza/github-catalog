import { Repository } from '@types'
import { api, baseURL } from 'api'
import { MOCK_GET_REPOSITORIES, MOCK_GET_REPOSITORIES_FORBIDDEN, MOCK_GET_REPOSITORIES_NOT_FOUND } from 'mocks'
import { delay, http, HttpResponse } from 'msw'

export const ITEMS_PER_PAGE = 12

export const getRepositories = async (user: string, page: number) => {
  const response = await api.get<Repository[]>(`/users/${user}/repos?per_page=${ITEMS_PER_PAGE}&page=${page ?? 1}`)
  const result = response.data
  return result
}

export const mockGetRepositories = http.get(`${baseURL}/users/:user/repos`, async ({ params, request }) => {
  const id = params.user
  const searchParams = new URLSearchParams(request.url)
  const page = searchParams.get('page')
  await delay()

  if (id === 'noData') return HttpResponse.json([], { status: 200 })
  if (id === 'error') return HttpResponse.json(MOCK_GET_REPOSITORIES_FORBIDDEN, { status: 403 })
  if (id === 'notFound') return HttpResponse.json(MOCK_GET_REPOSITORIES_NOT_FOUND, { status: 404 })

  const pageFormatted = !!page ? Number(page.replace(/\D/g, '')) : 1

  const start = (pageFormatted - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const paginatedRepositories = MOCK_GET_REPOSITORIES.slice(start, end)
  return HttpResponse.json(paginatedRepositories)
})
