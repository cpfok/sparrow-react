var config = {
  devServer: {
    hot: true,
    inline: true,
    port: 9000,
    stats: {colors: true, progress: false},
    compress: true,
    quiet: false,
    clientLogLevel: 'info',
    open: true,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        //pathRewrite: {'^/api': ''}
      }
    }
  }
};

module.exports = (webpackConfig)=> {
  //config.plugins = webpackConfig.plugins.concat(config.plugins);
  let retVal = Object.assign({}, webpackConfig, config);
  return webpackConfig;
};
