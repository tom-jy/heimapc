import axios from 'axios' // 引入
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 引入baseURL请求地址

// 注册请求拦截器
axios.interceptors.request.use(function (config) {
// 成功执行-回调函数，config是一个对象，代表所有请求信息
// 获取token
  const token = localStorage.getItem('use-token')
  // 在返回之前统一注入token
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
// 失败时会有一个错误，直接reject错误即可，reject会进去axios的catch中
  return Promise.reject(error)
})
export default axios // 导出
