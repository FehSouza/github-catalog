import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getRepositories, getUser, ITEMS_PER_PAGE } from 'services'

export const useRepositories = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { userLogin } = useParams()

  const userResponse = useQuery({
    queryKey: ['api/users', userLogin],
    queryFn: ({ queryKey: [_, user] }) => (user ? getUser(user) : null),
    retry: false,
  })

  const page = searchParams.get('page')
  const publicRepos = userResponse.data?.public_repos
  const totalItems = publicRepos ?? 0
  const totalPage = Math.ceil(totalItems / ITEMS_PER_PAGE)
  const pageNumber = Number(page ?? 1) > totalPage ? totalPage : Number(page ?? 1)

  const repositoriesResponse = useQuery({
    queryKey: ['api/repositories', userLogin, String(pageNumber), String(publicRepos ?? '')],
    queryFn: ({ queryKey: [_, user, pageResponse, repositories] }) => {
      if (!user || !pageResponse || !repositories) return null
      if (pageResponse !== page) setSearchParams(new URLSearchParams({ page: pageResponse }))
      return getRepositories(user, Number(pageResponse))
    },
    retry: false,
  })

  const handlePagination = (_e: React.ChangeEvent<unknown>, value: number) => {
    document.querySelector('#container')?.scrollTo({ top: 0, behavior: 'smooth' })
    setSearchParams(`page=${value}`)
  }

  const isLoading = !!userResponse.isPending || !!repositoriesResponse.isPending
  const notFound = !!userResponse.error && userResponse.error.response?.status === 404
  const unexpectedError = !!userResponse.error && userResponse.error.response?.status !== 404

  return {
    userLogin,
    isLoading,
    notFound,
    unexpectedError,
    repositories: repositoriesResponse.data,
    pageNumber,
    totalPage,
    handlePagination,
  }
}
