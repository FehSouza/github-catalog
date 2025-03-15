import { Box, Grid, Pagination, Typography } from '@mui/material'
import { Loading, NotFoundError, RepositoryCard, UnexpectedError } from 'components'
import { useRepositories } from 'hooks'
import { useTranslation } from 'react-i18next'

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
      <Typography variant="h2" align="center">
        {t('Repositories.title', { userLogin })}
      </Typography>

      {!repositories.length && (
        <Typography data-testid="repositories-page-no-data" align="center">
          {t('Repositories.empty')}
        </Typography>
      )}

      {!!repositories.length && (
        <Grid container gap={2}>
          {repositories.map((repository, i) => (
            <RepositoryCard key={repository.id} repository={repository} index={i} />
          ))}
        </Grid>
      )}

      {!!repositories.length && (
        <Pagination
          data-testid="pagination"
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
