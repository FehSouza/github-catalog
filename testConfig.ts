import { afterAll, beforeAll, beforeEach } from 'vitest'
import { server } from './src/api_mocks/server'
import { cleanup } from './src/utils/testUtils'

beforeEach(cleanup)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})
