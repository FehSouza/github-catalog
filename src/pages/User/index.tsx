import { Loading, NotFoundError, UnexpectedError, UserCard } from 'components'
import { useUser } from 'hooks'

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
