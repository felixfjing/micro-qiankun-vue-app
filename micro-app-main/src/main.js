import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './style/normalize.less'
import 'element-ui/lib/theme-chalk/index.css'

// import startQiankun from './application/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
// startQiankun()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#main-app')
