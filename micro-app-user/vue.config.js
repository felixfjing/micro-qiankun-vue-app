const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: 'MicroAppUser',
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_* 即可
      jsonpFunction: `webpackJsonp_MicroAppUser`
    }
  },
  devServer: {
    port: 10300,
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
