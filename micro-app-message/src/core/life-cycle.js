import Vue from 'vue'
import App from '../App.vue'
import router from '../router'
import store from '../store'
import log from '@/utils/log'
import actions from '@/core/actions'

let instance = null

/**
 * 渲染函数
 **/
const render = (props = {}) => {
  if (props) {
    actions.setActions(props)
  }

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
      log.capsule('MicroAppMessage', `mount`, 'success')
      console.group('MicroAppMessage props：')
      console.log(props)
      console.groupEnd('MicroAppMessage props：')

      render(props)
    },

    /**
     * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
     */
    async unmount() {
      log.capsule('MicroAppMessage', `unmount`, 'success')

      instance.$destroy()
      instance.$el.innerHTML = ''
      instance = null
    }
  }
}

export { render, lifeCycle }
