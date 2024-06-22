import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import { theme } from 'styles/theme'

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>{children}</CssBaseline>
    </ThemeProvider>
  )
}
