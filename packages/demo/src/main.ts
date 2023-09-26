import App from './App.vue'
import installRouter from './router'
import Vue3Form from '@vue3-form/core'
import { createApp } from 'vue'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/es/components/message/style/css'
import './assets/styles/style.css'
import 'uno.css'

const app = createApp(App)

app.use(Vue3Form)

installRouter(app)

installPinia(app)

app.mount('#app')
