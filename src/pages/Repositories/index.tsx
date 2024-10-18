import { Box, Grid, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Loading, NotFoundError, Pagination, RepositoryCard, UnexpectedError } from 'components'
import { useTranslation } from 'react-i18next'
import { useParams, useSearchParams } from 'react-router-dom'
import { getRepositories } from 'services'

export const Repositories = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const { userLogin } = useParams()
  if (!userLogin) return null

  const page = searchParams.get('page')

  const { data, error, isPending } = useQuery({
    queryKey: ['api/repositories', userLogin, page],
    queryFn: ({ queryKey: [_, user, page] }) => (user ? getRepositories(user, Number(page)) : null),
    retry: false,
  })

  const isLoading = !!isPending
  const notFound = !!error && error.response?.status === 404
  const unexpectedError = !!error && error.response?.status !== 404
  const notData = !data

  if (isLoading) return <Loading />
  if (notFound) return <NotFoundError />
  if (unexpectedError || notData) return <UnexpectedError />

  return (
    <Box
      component="section"
      width="100%"
      maxWidth="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      flex={1}
      mx="auto"
      px={2}
      py={4}
    >
      <Typography variant="h2">{t('Repositories.title', { userLogin })}</Typography>

      {!data.length && <Typography>{t('Repositories.empty')}</Typography>}

      {!!data.length && (
        <Grid container gap={2}>
          {data.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </Grid>
      )}

      {!!data.length && <Pagination />}
    </Box>
  )
}
