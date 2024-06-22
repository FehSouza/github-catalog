import { Button, Container } from '@mui/material'
import { SwitchLanguages } from 'components'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <Container sx={{ maxWidth: 'lg', padding: '16px' }}>
      <Button variant="outlined">{t('Home.Olá mundo')}</Button>
      <SwitchLanguages />
    </Container>
  )
}

export default App
