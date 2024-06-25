import { Box, Paper } from '@mui/material'
import { Logo, Menu, SwitchLanguages } from 'components'

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
      <Box maxWidth="lg" display="flex" alignItems="center" justifyContent="space-between" mx="auto" px={2} py={1.5}>
        <Logo />
        <Menu />
        <SwitchLanguages />
      </Box>
    </Paper>
  )
}
