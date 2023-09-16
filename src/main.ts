import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
setupStore()
