import { Box, List, ListItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const listSteps = [
  'Default.stepNotFoundError1',
  'Default.stepNotFoundError2',
  'Default.stepNotFoundError3',
  'Default.stepNotFoundError4',
]

export const NotFoundError = () => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="not-found-error"
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
      <Typography variant="h2" align="center">
        {t('Default.messageNotFoundError')}
      </Typography>

      <Typography align="center">{t('Default.stepsNotFoundError')}</Typography>

      <List disablePadding dense>
        {listSteps.map((step, index) => (
          <ListItem key={`step-error-${index}`} sx={{ justifyContent: 'center', textAlign: 'center' }}>
            {t(step)}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
