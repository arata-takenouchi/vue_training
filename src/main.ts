import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)
app.provide('AppProvider', 'AppProvider')
app.mount('#app')
