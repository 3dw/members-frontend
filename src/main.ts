import './assets/main.css'
// Add this line to import Semantic UI CSS
import 'semantic-ui-css/semantic.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueGtag, {
  config: {
    id: 'G-54PE9QLK7Z'
  }
}, router)

app.mount('#app')
