import { Box, List, ListItem, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const listSteps = ['Home.stepError1', 'Home.stepError2', 'Home.stepError3', 'Home.stepError4']

export const UserNotFound = () => {
  const { t } = useTranslation()

  return (
    <Box
      data-testid="user-not-found"
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      py={4}
    >
      <Typography variant="h2" align="center">
        {t('Home.messageError')}
      </Typography>

      <Typography align="center">{t('Home.stepsError')}</Typography>

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
