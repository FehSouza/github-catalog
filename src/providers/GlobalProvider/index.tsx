import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { theme } from 'styles/theme'

const client = new QueryClient()

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>{children}</CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
