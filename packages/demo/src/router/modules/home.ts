import {
  SkillLevelBasic,
  SkillLevelIntermediate,
  SkillLevelAdvanced
} from '@vicons/carbon'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/basic',
    meta: {
      isHome: true
    }
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import('@/views/basic.vue'),
    meta: {
      title: '基本使用',
      icon: SkillLevelBasic
    }
  },
  {
    path: '/total',
    name: 'total',
    component: () => import('@/views/total.vue'),
    meta: {
      title: '完整表单',
      icon: SkillLevelIntermediate
    }
  },
  {
    path: '/advance',
    name: 'advance',
    component: () => import('@/views/advance.vue'),
    meta: {
      title: '进阶使用',
      icon: SkillLevelAdvanced
    }
  }
]

export default routes
