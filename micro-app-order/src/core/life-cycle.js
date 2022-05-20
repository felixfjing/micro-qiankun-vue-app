import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import store from '../store'
import log from '@/utils/log'

let instance = null

const render = (props = {}) => {
  const { container } = props

  Vue.config.productionTip = false

  // 挂载应用
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

/**
 * 微应用生命函数
 **/
const lifeCycle = () => {
  return {
    /**
     * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
     * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
     */
    async bootstrap() {},

    /**
     * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    async mount(props) {
      log.capsule('MicroAppOrder', `mount`, 'success')
      console.group('MicroAppOrder props：')
      console.log(props)
      console.groupEnd('MicroAppOrder props：')

      render(props)
    },

    /**
     * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
     */
    async unmount() {
      log.capsule('MicroAppOrder', `unmount`, 'success')

      instance.$destroy()
      instance.$el.innerHTML = ''
      instance = null
    }
  }
}

export { render, lifeCycle }
