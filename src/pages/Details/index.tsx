import { Box, Divider, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { Search } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getUser } from 'services'

interface DetailsProps {
  title: string
}

export const useDetails = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const { isPending, error } = useMutation({
    mutationKey: ['api/users', value],
    mutationFn: getUser,
  })

  const handleRequestUser = () => navigate(`./${value}`)

  return { setValue, isPending, error, handleRequestUser }
}

export const Details = ({ title }: DetailsProps) => {
  const { t } = useTranslation()
  const { setValue, isPending, error, handleRequestUser } = useDetails()

  return (
    <Box data-testid="details-page" component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      {!!title && (
        <Typography
          data-testid="details-page-title"
          variant="h1"
          fontWeight="700"
          color="primary.main"
          align="center"
          mt={4}
          role="heading"
        >
          {t(title)}
        </Typography>
      )}

      <Search setValue={setValue} error={error} trigger={handleRequestUser} isMutating={isPending} />

      <Divider variant="middle" aria-hidden />
    </Box>
  )
}
