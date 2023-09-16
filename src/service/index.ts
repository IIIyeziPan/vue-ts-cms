// service统一出口
import { Axios, AxiosHeaders } from 'axios'
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  headers: new AxiosHeaders(),
  timeout: TIME_OUT,
  interceptors: {
    // 携带token的拦截
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        // Authorization授权
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
