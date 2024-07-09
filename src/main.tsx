import { AppRoutes } from 'Routes/Routes'
import 'i18n/i18nConfig.ts'
import { GlobalProvider } from 'providers/index.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const config = async () => {
  if (import.meta.env.MODE === 'mock') {
    const { worker } = await import('api_mocks/browser')
    worker.start()
  }
}

config().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <GlobalProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GlobalProvider>
    </React.StrictMode>
  )
})
