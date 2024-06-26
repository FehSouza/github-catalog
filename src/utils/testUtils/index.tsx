import '@testing-library/jest-dom/vitest'
import { render, RenderOptions } from '@testing-library/react'
import 'i18n/i18nConfig'
import { GlobalProvider } from 'providers'
import React, { ReactElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

interface TestWrapperProps {
  children: React.ReactNode
  entry?: string[]
  routes?: string[]
  route?: string
}

const TestWrapper = ({ children, entry, routes = [], route = '*' }: TestWrapperProps) => {
  return (
    <GlobalProvider>
      <MemoryRouter initialEntries={entry}>
        <Routes>
          {routes.map((path) => (
            <Route key={path} path={path} element={<div>{children}</div>} />
          ))}
          <Route path={route} element={<div data-testid="test-wrapper">{children}</div>} />
        </Routes>
      </MemoryRouter>
    </GlobalProvider>
  )
}

const customRender = (
  ui: ReactElement,
  {
    initialProps,
    ...options
  }: { initialProps?: Omit<TestWrapperProps, 'children'> } & Omit<RenderOptions, 'wrapper'> = {}
) => {
  const component = (rest: any) => <TestWrapper {...rest} {...(initialProps ?? {})} />
  return render(ui, { wrapper: component, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
