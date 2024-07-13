import { Box, Divider, Typography } from '@mui/material'
import { NotFoundError, Search, UnexpectedError, UserCard } from 'components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { getUser } from 'services'
import useSWRMutation from 'swr/mutation'

export const Home = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const userLogin = searchParams.get('userLogin')
  const [value, setValue] = useState(userLogin ?? '')

  const { data, error, trigger, isMutating } = useSWRMutation(`api/users/${value}`, () => getUser(value), {
    rollbackOnError: false,
  })

  useEffect(() => {
    if (!!userLogin) trigger()
  }, [])

  const handleRequestUser = async () => {
    const user = await trigger()
    setSearchParams(new URLSearchParams({ userLogin: user.login }))
  }

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t('Home.title')}
      </Typography>

      <Search value={value} setValue={setValue} error={error} trigger={handleRequestUser} isMutating={isMutating} />

      <Divider variant="middle" aria-hidden />

      {!error && !!data && <UserCard user={data} />}
      {!!error && error?.request.status === 404 && <NotFoundError />}
      {!!error && error?.request.status !== 404 && <UnexpectedError />}
    </Box>
  )
}
