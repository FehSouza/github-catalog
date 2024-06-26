import { Box } from '@mui/material'
import { Logo } from 'components/Logo'

export const Footer = () => {
  return (
    <Box data-testid="footer" component="footer" borderTop={1} borderColor="secondary.contrastText">
      <Box component="section" maxWidth="max-content" mx="auto" px={2} py={1.5}>
        <Logo hasText />
      </Box>
    </Box>
  )
}
