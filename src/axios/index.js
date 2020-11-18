import axios from 'axios'
import { Message } from 'element-ui'
// eslint-disable-next-line no-undef
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? window.host.devUrl : window.host.prodUrl,
  timeout: window.host.timeout
})
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const status = error.response.status
    switch (status) {
      case 404 :
        Message.error('网络请求不存在')
        break
      case 403 :
        Message.error('暂无访问权限')
        break
      case 500 :
        Message.error('接口请求异常')
        break
      case 504 :
        Message.error('网关超时')
        break
      default:
        Message.error(error.response.data.message)
        break
    }
    return Promise.reject(error)
  }
)
instance.interceptors.request.use(config => {
  if (window.host.useToken && sessionStorage.getItem('token')) {
    config.headers.token = sessionStorage.getItem('token')
  }
  return config
})
export default instance
