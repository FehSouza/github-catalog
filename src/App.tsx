import { Button, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SwitchLanguages } from './components'

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
