// axios的基础封装
import axios from "axios"

// 创建axios实例
const httpInstance = axios.create({
  // 1.接口基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 2.设置接口的超时时间
  timeout:5000
})

// 3.axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// 4.axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  return Promise.reject(e)
})

export default httpInstance