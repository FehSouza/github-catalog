import { Box, Divider, Typography } from '@mui/material'
import { NotFoundError, Search, UnexpectedError } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getUser } from 'services'
import useSWRMutation from 'swr/mutation'

interface DetailsProps {
  title: string
}

export const Details = ({ title }: DetailsProps) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const { error, trigger, isMutating } = useSWRMutation(`api/users/${value}`, () => getUser(value), {
    rollbackOnError: false,
  })

  const handleRequestUser = async () => {
    const user = await trigger()
    navigate(`./${user.login}`)
  }

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t(title)}
      </Typography>

      <Search setValue={setValue} error={error} trigger={handleRequestUser} isMutating={isMutating} />

      <Divider variant="middle" aria-hidden />

      {!!error && error?.request.status === 404 && <NotFoundError />}
      {!!error && error?.request.status !== 404 && <UnexpectedError />}
    </Box>
  )
}
