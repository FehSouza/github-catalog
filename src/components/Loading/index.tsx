import { Box, CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Loading = () => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="loading"
      component="section"
      maxWidth="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      flex={1}
      mx="auto"
      px={2}
      py={4}
    >
      <CircularProgress size={20} color="inherit" aria-label={t('Default.loading')} />
    </Box>
  )
}
