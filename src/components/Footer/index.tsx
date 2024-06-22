import { Container } from '@mui/material'

export const Footer = () => {
  return (
    <Container
      component="footer"
      maxWidth={false}
      disableGutters
      sx={{ borderTop: 1, borderColor: 'secondary.contrastText' }}
    >
      <Container maxWidth="lg" disableGutters sx={{ padding: 2 }}>
        <span>Footer</span>
      </Container>
    </Container>
  )
}
