// 封装- 引入axios
import axios from 'axios'
// 引入请求头地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 注册请求拦截器 参数为两个回调函数
axios.interceptors.request.use(function (config) {
// 成功之后执行，config参数表示所有的axios请求信息
// 获取token
  const token = localStorage.getItem('use-token')
  // 在返回之前，  统一注入token
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
// 失败之后执行，可赢promise。
// 失败之后会有一个错误，直接reject错误即可  reject会直接进入到axios的catch中
  return Promise.reject(error)
})

// 导出
export default axios
