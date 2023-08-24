import * as components from './components'
export * from './components'

export * from './hooks'

export * from './utils'

import type { App } from 'vue'

export default {
  install(app: App) {
    let c: keyof typeof components
    for (c in components) {
      app.use(components[c])
    }
  }
}
