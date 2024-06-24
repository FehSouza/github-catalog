import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#4283ff',
    },

    secondary: {
      main: '#669aff',
    },
  },

  typography: {
    h1: {
      fontSize: 22,
    },

    h2: {
      fontSize: 20,
    },

    h3: {
      fontSize: 18,
    },

    h4: {
      fontSize: 16,
    },

    h5: {
      fontSize: 14,
    },

    h6: {
      fontSize: 12,
    },
  },
})
