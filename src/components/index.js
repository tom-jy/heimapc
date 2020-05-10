import layoutAsaid from './home/layout-said'
import layoutHeader from './home/layout-header'

export default {
  install: function (Vue) {
    Vue.component('layout-said', layoutAsaid)
    Vue.component('layout-header', layoutHeader)
  }
}
