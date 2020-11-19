// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/my-nav/',
  assetsDir: 'my-nav',
  outputDir: './dist', // 打包的目录。
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  filenameHashing: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('css', resolve('src/css'))
      .set('js', resolve('src/js'))
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "css/base.scss";`
      }
    }
  }
}
