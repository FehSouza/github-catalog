import { useQuery } from '@tanstack/react-query'
import { Loading, NotFoundError, UnexpectedError, UserCard } from 'components'
import { useParams } from 'react-router-dom'
import { getUser } from 'services'

export const useUser = () => {
  const { userLogin } = useParams()

  const { data, error, isPending } = useQuery({
    queryKey: ['api/users', userLogin],
    queryFn: ({ queryKey: [_, value] }) => (value ? getUser(value) : null),
    retry: false,
  })
  return { data, error, isPending }
}

export const User = () => {
  const { data, error, isPending } = useUser()

  const isLoading = !!isPending
  const notFound = !!error && error.response?.status === 404
  const unexpectedError = !!error && error.response?.status !== 404
  const notData = !data

  if (isLoading) return <Loading />
  if (notFound) return <NotFoundError />
  if (unexpectedError || notData) return <UnexpectedError />
  return <UserCard user={data} />
}
