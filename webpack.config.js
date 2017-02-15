var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// multiple extract instances
var _ = require('lodash');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var configFile = {
  css: '[name].css',
  outputJs: '[name].js',
  commonJs: 'common.js',
}

var ENV = {
  development: 'dev',
  product: 'prd',
  uat: 'uat',
  stage: 'stg',
}

var options = {
  env: process.env.NODE_ENV || ENV.development
}
// 生产环境使用hash
if (options.env == ENV.stage || options.env == ENV.product) {
  configFile = {
    css: '[name]-[hash:6].css',
    outputJs: '[name]-[hash:6].js',
    commonJs: 'common-[hash:6].js',
  }
}
var cssExtractor = new ExtractTextPlugin(configFile.css);
// 获取指定路径下的入口文件

var config = {
  entry: ['./src/sample/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: configFile.outputJs,
    chunkFilename: "[name].js"
    //libraryTarget: 'umd'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: 'src/template.html'
    }),
  ],
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
      '/api-uc': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        //pathRewrite: {'^/api': ''}
      },
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:3000',
        secure: false,
        //pathRewrite: {'^/api': ''}
      },
      '/ueditor': {
        changeOrigin: true,
        target: 'http://localhost:3000/',
        secure: false,
        pathRewrite: {'^/api': ''}
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(scss)$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
      },
      {
        test: /\.(less)$/,
        loader: "style-loader!css-loader!postcss-loader!less-loader"
      },
      {
        //test: path.join(__dirname, 'src'),
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      },
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};


module.exports = config;
