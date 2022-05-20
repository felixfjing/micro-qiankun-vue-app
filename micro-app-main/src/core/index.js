import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'
import log from '@/utils/log.js'
// 子应用注册信息
import apps from './apps'

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // qiankun 生命周期钩子 - 加载前
  beforeLoad: (app) => {
    log.capsule('MicroAppMain', `beforeLoad，app name：${app.name}`)
    return Promise.resolve()
  },

  // qiankun 生命周期钩子 - 挂载后
  afterMount: (app) => {
    log.capsule('MicroAppMain', `afterMount，app name：${app.name}`)
    return Promise.resolve()
  }
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event)

  const { message } = event

  if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
    log.capsule('MicroAppMain', '子应用加载失败，请检查应用是否可运行~', 'danger')
  }
})

export default start
