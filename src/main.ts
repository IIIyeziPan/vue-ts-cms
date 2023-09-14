import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//引入Elmessage和Elloading的css样式文件
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import hyRequest from './service/index'

import App from './App.vue'

import router from './router'
import store from './store'
import { AxiosHeaders } from 'axios'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// hyRequest.request({
//   url: '/home/multidata',
//   headers: new AxiosHeaders(),
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .get<DataType>({
    url: '/home/multidata',
    headers: new AxiosHeaders(),
    // method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

// hyRequest.get()
