import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/basic'
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('@/views/basic.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import('@/views/total.vue')
  },
  {
    path: '/advance',
    name: 'advance',
    component: () => import('@/views/advance.vue')
  }
]

export default routes
