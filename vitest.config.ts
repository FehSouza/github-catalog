import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults, defaultExclude, defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./testConfig.ts', './jest-setup.ts'],
    exclude: [...defaultExclude],
    coverage: {
      exclude: [
        '**/assets',
        '**/src/components/index.ts**',
        '**/src/i18n',
        '**/src/layout/index.ts**',
        '**/src/mocks/index.ts**',
        '**/src/pages/index.ts**',
        '**/src/services/index.ts**',
        '**/src/styles',
        '**/tests',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
})
