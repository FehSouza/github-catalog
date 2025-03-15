import { Box, Grid, Pagination, Typography } from '@mui/material'
import { FollowerCard, Loading, NotFoundError, UnexpectedError } from 'components'
import { useFollowers } from 'hooks'
import { useTranslation } from 'react-i18next'

export const Followers = () => {
  const { t } = useTranslation()
  const { userLogin, isLoading, notFound, unexpectedError, followers, pageNumber, totalPage, handlePagination } =
    useFollowers()

  if (isLoading) return <Loading />
  if (notFound || !userLogin) return <NotFoundError />
  if (unexpectedError || !followers) return <UnexpectedError />

  return (
    <Box
      data-testid="followers-page"
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
        {t('Followers.title', { userLogin })}
      </Typography>

      {!followers.length && (
        <Typography data-testid="followers-page-no-data" align="center">
          {t('Followers.empty')}
        </Typography>
      )}

      {!!followers.length && (
        <Grid container gap={2}>
          {followers.map((follower) => (
            <FollowerCard key={follower.id} follower={follower} />
          ))}
        </Grid>
      )}

      {!!followers.length && (
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
