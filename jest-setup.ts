import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

expect.extend(matchers)

globalThis.IS_REACT_ACT_ENVIRONMENT = true
