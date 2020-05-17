import axios from 'axios' // 引入
import router from '@/router'
import JsonBig from 'json-bigint' // 引入json-bigint包
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 引入baseURL请求地址

axios.defaults.transformResponse = [function (data) {
  return data ? JsonBig.parse(data) : {}
}]
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

// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功的时候执行，回调函数是一个响应体
  // 在拦截器中将需要的数据返回 将数据进行解构，将嵌套的data释放出来
  return response.data ? response.data : {} // 有的响应没有响应数据
}, function (error) {
  // 失败时执行，error是错误对象，里边包含状态码和错误信息
  // 我们需要判断状态码是否为401,401表示获取用户信息错误，因为之前在导航守卫校验过token钥匙
  // 粗暴换钥匙： 删除token，返回登录页-这里先引入router实例对象
  if (error.response.status === 401) {
    localStorage.removeItem('use-token') // 删除钥匙
    router.push('/login') // 返回登录页

    // 处理，所有的axios调用，依然可以在catch中得到错误
    return Promise.reject(error)
  }
})
export default axios // 导出
