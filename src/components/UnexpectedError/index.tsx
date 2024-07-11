import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const UnexpectedError = () => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="unexpected-error"
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      py={4}
    >
      <Typography variant="h2" align="center">
        {t('Default.messageUnexpectedError')}
      </Typography>

      <Typography align="center">{t('Default.textUnexpectedError')}</Typography>
    </Box>
  )
}
