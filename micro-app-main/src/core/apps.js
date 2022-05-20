import entry from './entry-config.js'

// eslint-disable-next-line no-unused-vars
const { Micro_App_Message, Micro_App_Order, Micro_App_User } = entry

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   * props: 主应用传给微应用的参数
   */
  {
    name: 'MicroAppMessage',
    entry: Micro_App_Message,
    container: '#frame',
    activeRule: '/app/message',
    props: {
      message: 'MicroApp Send Message'
    }
  },
  // {
  //   name: 'MicroAppOrder',
  //   entry: Micro_App_Order,
  //   container: '#frame',
  //   activeRule: '/app/order',
  //   props: {
  //     message: 'MicroApp Send Order'
  //   }
  // },
  {
    name: 'MicroAppUser',
    entry: Micro_App_User,
    container: '#frame',
    activeRule: '/app/user',
    props: {
      message: 'MicroApp Send User'
    }
  }
]

export default apps
