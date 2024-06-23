import { Box, Paper } from '@mui/material'
import { Logo } from 'components/Logo'
import { SwitchLanguages } from 'components/SwitchLanguages'

export const Header = () => {
  return (
    <Paper
      component="header"
      square={true}
      elevation={4}
      sx={{
        width: '100%',
        backgroundColor: '#121212B3',
        backgroundImage: 'none',
        backdropFilter: 'blur(4px)',
        position: 'fixed',
        zIndex: 1,
      }}
    >
      <Box maxWidth="lg" mx="auto" px={2} py={1.5} position="relative">
        <Logo />
        <SwitchLanguages />
      </Box>
    </Paper>
  )
}
