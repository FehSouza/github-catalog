import { Button, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <Container component="main" maxWidth={false} disableGutters>
      <Container maxWidth="lg" disableGutters sx={{ padding: 2 }}>
        <Button variant="outlined">{t('Home.Olá mundo')}</Button>
      </Container>
    </Container>
  )
}
