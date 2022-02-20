import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'animate.css'
import './assets/style/common.scss'

import components from '@/components/UI'

const app = createApp(App)

// глобальная регистрация компонентов
components.forEach(component => {
  app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
