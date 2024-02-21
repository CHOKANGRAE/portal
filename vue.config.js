module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
  , publicPath: '/portal/'
  , devServer: {
    allowedHosts: "all",
    proxy: {
      '/portal/api': {
        target: 'https://pay.sktelecom.com',
      }
    }
  }
}
