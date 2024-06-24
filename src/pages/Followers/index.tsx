import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Followers = () => {
  const { t } = useTranslation()

  return (
    <Box component="main" flex={1}>
      <Box component="section" maxWidth="lg" mx="auto" p={2}>
        <Typography variant="h1" color="primary.main" fontWeight={700}>
          {t('Followers.Seguidores')}
        </Typography>
      </Box>
    </Box>
  )
}
