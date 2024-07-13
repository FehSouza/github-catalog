import { Box, Divider, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export const Repositories = () => {
  const { t } = useTranslation()
  const params = useParams()
  const userLogin = params.userLogin

  return (
    <Box component="main" width="100%" maxWidth="lg" flex={1} mx="auto" px={2}>
      <Typography variant="h1" fontWeight="700" color="primary.main" align="center" mt={4}>
        {t('Default.repositories')}
      </Typography>

      <Typography>{userLogin}</Typography>

      <Divider variant="middle" aria-hidden />
    </Box>
  )
}
