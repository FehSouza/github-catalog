import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <Box component="main" flex={1}>
      <Box component="section" maxWidth="lg" mx="auto" p={2}>
        <Button variant="outlined">{t('Home.Olá mundo')}</Button>
      </Box>
    </Box>
  )
}
