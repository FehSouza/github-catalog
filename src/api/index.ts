import axios from 'axios'

export const ENABLE_MOCK = true

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
