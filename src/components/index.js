import layoutAsaid from './home/layout-said'
import layoutHeader from './home/layout-header'
import Breadcrub from './common/breadcrub.vue'
export default {
  install: function (Vue) {
    Vue.component('layout-said', layoutAsaid)
    Vue.component('layout-header', layoutHeader)
    Vue.component('breadcrub', Breadcrub) // 全局注册面包屑组件
  }
}
