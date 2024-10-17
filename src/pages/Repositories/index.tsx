import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Loading, NotFoundError, Pagination, UnexpectedError } from 'components'
import { useParams, useSearchParams } from 'react-router-dom'
import { getRepositories } from 'services'

export const Repositories = () => {
  const { userLogin } = useParams()
  const [searchParams] = useSearchParams()

  const page = searchParams.get('page')

  const { data, error, isPending } = useQuery({
    queryKey: ['api/repositories', userLogin, page],
    queryFn: ({ queryKey: [_, user, page] }) => (user ? getRepositories(user, Number(page)) : null),
    retry: false,
  })

  console.log(data)

  const isLoading = !!isPending
  const notFound = !!error && error.response?.status === 404
  const unexpectedError = !!error && error.response?.status !== 404
  const notData = !data

  if (isLoading) return <Loading />
  if (notFound) return <NotFoundError />
  if (unexpectedError || notData) return <UnexpectedError />

  if (!data.length) return <span>Sem repo</span>

  return (
    <Box
      component="section"
      width="100%"
      maxWidth="lg"
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap={4}
      mx="auto"
      px={2}
      py={4}
    >
      <Typography>{userLogin}</Typography>
      <Pagination />
    </Box>
  )
}
