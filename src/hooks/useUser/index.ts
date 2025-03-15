import { useQuery } from '@tanstack/react-query'
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
