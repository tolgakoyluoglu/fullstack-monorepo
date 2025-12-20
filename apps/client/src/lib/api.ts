import { treaty } from '@elysiajs/eden'
import type { App } from '@api/index'
import { config } from './config'

export const api = treaty<App>(config.apiUrl, {
  fetch: {
    credentials: 'include',
  },
})
