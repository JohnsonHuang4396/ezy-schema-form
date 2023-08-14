import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import type { App } from 'vue'

export function installPinia(app: App) {
  const pinia = createPinia()

  pinia.use(piniaPluginPersistedstate)

  app.use(pinia)
}
