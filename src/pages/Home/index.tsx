import { Box, Divider, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { NotFoundError, Search, UnexpectedError, UserCard } from 'components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { getUser } from 'services'

export const useHome = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const userLogin = searchParams.get('userLogin')
  const [value, setValue] = useState(userLogin ?? '')

  const { isPending, error, data, mutate, mutateAsync } = useMutation({
    mutationKey: ['api/users', value],
    mutationFn: getUser,
  })

  useEffect(() => {
    if (!!userLogin) mutate(userLogin)
  }, [])

  const handleRequestUser = async () => {
    const user = await mutateAsync(value)
    if (!!user) setSearchParams(new URLSearchParams({ userLogin: value }))
  }

  return { value, setValue, isPending, error, data, handleRequestUser }
}

export const Home = () => {
  const { t } = useTranslation()
  const { value, setValue, isPending, error, data, handleRequestUser } = useHome()

  return (
    <Box data-testid="home-page" component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t('Home.title')}
      </Typography>

      <Search value={value} setValue={setValue} error={error} trigger={handleRequestUser} isMutating={isPending} />

      <Divider variant="middle" aria-hidden />

      {!error && !!data && <UserCard user={data} />}
      {!!error && error?.response?.status === 404 && <NotFoundError />}
      {!!error && error?.response?.status !== 404 && <UnexpectedError />}
    </Box>
  )
}
