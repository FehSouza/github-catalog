import { Box, Divider, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { NotFoundError, Search, UnexpectedError } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getUser } from 'services'

interface DetailsProps {
  title: string
}

export const Details = ({ title }: DetailsProps) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const { isPending, error, mutateAsync } = useMutation({
    mutationKey: ['api/users', value],
    mutationFn: getUser,
  })

  const handleRequestUser = async () => {
    const user = await mutateAsync(value)
    if (user) navigate(`./${value}`)
  }

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t(title)}
      </Typography>

      <Search setValue={setValue} error={error} trigger={handleRequestUser} isMutating={isPending} />

      <Divider variant="middle" aria-hidden />

      {!!error && error?.response?.status === 404 && <NotFoundError />}
      {!!error && error?.response?.status !== 404 && <UnexpectedError />}
    </Box>
  )
}
