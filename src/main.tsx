import { AppRoutes } from 'Routes/Routes'
import 'i18n/i18nConfig.ts'
import { GlobalProvider } from 'providers/index.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// if (import.meta.env.MODE === 'mock') {

// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
)
