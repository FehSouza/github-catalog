import { Box, Grid, Pagination, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { FollowerCard, Loading, NotFoundError, UnexpectedError } from 'components'
import { useTranslation } from 'react-i18next'
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
