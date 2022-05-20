const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true
  }
}
