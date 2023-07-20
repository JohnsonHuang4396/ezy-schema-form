import App from './App.vue'
import installRouter from './router'
import { createApp } from 'vue'

import './assets/styles/style.css'

const app = createApp(App)

installRouter(app)

app.mount('#app')
