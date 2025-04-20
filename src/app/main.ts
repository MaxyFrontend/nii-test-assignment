import './assets/scss/main.scss'

import { createApp } from 'vue'
import { store, key } from '@/app/store'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store, key)
app.use(router)

app.mount('#app')
