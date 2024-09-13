import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
inject()
