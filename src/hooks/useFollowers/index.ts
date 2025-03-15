import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'
import { getFollowers, getUser, ITEMS_PER_PAGE } from 'services'

export const useFollowers = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { userLogin } = useParams()

  const userResponse = useQuery({
    queryKey: ['api/users', userLogin],
    queryFn: ({ queryKey: [_, user] }) => (user ? getUser(user) : null),
    retry: false,
  })

  const page = searchParams.get('page')
  const followers = userResponse.data?.followers
  const totalItems = followers ?? 0
  const totalPage = Math.ceil(totalItems / ITEMS_PER_PAGE)
  const pageNumber = Number(page ?? 1) > totalPage ? totalPage : Number(page ?? 1)

  const followersResponse = useQuery({
    queryKey: ['api/followers', userLogin, String(pageNumber), String(followers ?? '')],
    queryFn: ({ queryKey: [_, user, pageResponse, followers] }) => {
      if (!user || !pageResponse || !followers) return null
      if (pageResponse !== page) setSearchParams(new URLSearchParams({ page: pageResponse }))
      return getFollowers(user, Number(pageResponse))
    },
    retry: false,
  })

  const handlePagination = (_e: React.ChangeEvent<unknown>, value: number) => {
    document.querySelector('#container')?.scrollTo({ top: 0, behavior: 'smooth' })
    setSearchParams(`page=${value}`)
  }

  const isLoading = !!userResponse.isPending || !!followersResponse.isPending
  const notFound = !!userResponse.error && userResponse.error.response?.status === 404
  const unexpectedError = !!userResponse.error && userResponse.error.response?.status !== 404

  return {
    userLogin,
    isLoading,
    notFound,
    unexpectedError,
    followers: followersResponse.data,
    pageNumber,
    totalPage,
    handlePagination,
  }
}
