// service统一出口
import { Axios, AxiosHeaders } from 'axios'
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  headers: new AxiosHeaders(),
  timeout: TIME_OUT,
  interceptors: {
    // 携带token的拦截
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        // Authorization授权
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('请求成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应成功的拦截')
      return err
    }
  }
})

export default hyRequest
