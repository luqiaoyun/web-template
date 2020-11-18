
const { name } = require('./package')
console.log(name)
module.exports = {
  outputDir: name,
  publicPath: '/' + name,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.2.52:10006/wh/rest/v1/data-models/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
