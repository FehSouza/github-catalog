import '@testing-library/jest-dom/vitest'
import { render, RenderOptions } from '@testing-library/react'
import 'i18n/i18nConfig'
import { GlobalProvider } from 'providers'
import React, { ReactElement } from 'react'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <GlobalProvider>{children}</GlobalProvider>
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
