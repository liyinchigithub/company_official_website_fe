module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true,
    port: 9000,
    proxy: {
      '/api/': {
        target: 'https://test.xxxx.com/api',   //测试环境,
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api/': ''
        }
      },
    },

  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = '官网';
        return args;
      })
  }
}
