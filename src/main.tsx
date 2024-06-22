import App from 'App'
import 'i18n/i18nConfig.ts'
import { GlobalProvider } from 'providers/index.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
)
