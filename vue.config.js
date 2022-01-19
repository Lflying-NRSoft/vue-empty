const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('@/', resolve('src'))
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '超级无敌炫酷暴龙战神'
        return args
      })
  },


  // easy-player  相关
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
      ])
    ]
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
        },
        javascriptEnabled: true,
      }
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 8888,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      },
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
}