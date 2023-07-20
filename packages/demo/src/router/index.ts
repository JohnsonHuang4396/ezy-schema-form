import HomeRoutes from './modules/home'
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router'
import type { App } from 'vue'

const routes: RouteRecordRaw[] = [...HomeRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const installRouter = (app: App) => {
  app.use(router)
}

export default installRouter
