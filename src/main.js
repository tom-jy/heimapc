import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less'
import axios from 'axios'// 引入axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios // 将axios 给到VUE的原型对象
Vue.config.productionTip = false
Vue.use(ElementUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
