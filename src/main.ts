import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const options = {
  timeout: 5000
}

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
