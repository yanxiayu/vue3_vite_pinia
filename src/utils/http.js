// axios的基础封装
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

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
  // 统一错误提示
  // console.log(e);
  ElMessage({
    type: 'warning',
    message:e.response.data.message
  })
  return Promise.reject(e)
})

export default httpInstance