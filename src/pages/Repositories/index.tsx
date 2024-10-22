import { Box, Grid, Pagination, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Loading, NotFoundError, RepositoryCard, UnexpectedError } from 'components'
import { useTranslation } from 'react-i18next'
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

export const Repositories = () => {
  const { t } = useTranslation()
  const { userLogin, isLoading, notFound, unexpectedError, repositories, pageNumber, totalPage, handlePagination } =
    useRepositories()

  if (isLoading) return <Loading />
  if (notFound || !userLogin) return <NotFoundError />
  if (unexpectedError || !repositories) return <UnexpectedError />

  return (
    <Box
      data-testid="repositories-page"
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

      {!repositories.length && (
        <Typography data-testid="repositories-page-no-data">{t('Repositories.empty')}</Typography>
      )}

      {!!repositories.length && (
        <Grid container gap={2}>
          {repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))}
        </Grid>
      )}

      {!!repositories.length && (
        <Pagination
          page={pageNumber}
          count={totalPage}
          onChange={handlePagination}
          color="primary"
          variant="outlined"
          shape="rounded"
          siblingCount={1}
        />
      )}
    </Box>
  )
}
