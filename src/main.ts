import * as Sentry from '@sentry/vue'
import { inject } from '@vercel/analytics'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [], // Thêm các route của bạn vào đây
})

Sentry.init({
  app,
  dsn: 'https://5fac7883db9d5b518653c8ccb9c356d7@o4506076619014144.ingest.us.sentry.io/4507256096948224',
  integrations: [Sentry.browserTracingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
})

app.use(router)
inject()
app.mount('#app')
