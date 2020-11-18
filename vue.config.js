
const { name } = require('./package')
console.log(name)
module.exports = {
  outputDir: name,
  publicPath: '/' + name,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
