import Vue from 'vue'
import App from './App.vue'

// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'noty/lib/noty.css';  // 引入 Noty 的样式

// Vue 路由
import routers from './router'
Vue.use(routers)


// 全局注册 $
Vue.prototype.$ = $


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:routers
}).$mount('#app')
