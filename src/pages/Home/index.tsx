import { Box, Divider, Typography } from '@mui/material'
import { NotFoundError, Search, UnexpectedError, UserCard } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getUser } from 'services'
import useSWRMutation from 'swr/mutation'

export const Home = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const { data, error, trigger, isMutating } = useSWRMutation(`api/users/${value}`, () => getUser(value), {
    rollbackOnError: false,
  })

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t('Home.title')}
      </Typography>

      <Search setValue={setValue} error={error} trigger={trigger} isMutating={isMutating} />

      <Divider variant="middle" aria-hidden />

      {!error && !!data && <UserCard user={data} />}
      {!!error && error?.request.status === 404 && <NotFoundError />}
      {!!error && error?.request.status !== 404 && <UnexpectedError />}
    </Box>
  )
}
