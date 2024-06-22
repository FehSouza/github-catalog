import { Container } from '@mui/material'
import { SwitchLanguages } from 'components/SwitchLanguages'

export const Header = () => {
  return (
    <Container
      component="header"
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: 88,
        backgroundColor: '#121212',
        boxShadow: '0 0 12px 2px #121212',
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ minHeight: 88, padding: 2, position: 'relative' }}>
        <SwitchLanguages />
      </Container>
    </Container>
  )
}
