var path = require('path')
var utils = require('./utils')
var config = require('../config')
var merge = require('webpack-merge')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = function (styleOptions) {
  return {
    output: {
      path: config.build.assetsRoot,
      filename: '[name].js',
      publicPath: process.env.NODE_ENV === 'production' ?
        config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
      }
    },
    module: merge({rules: utils.styleLoaders(styleOptions)}, {
      rules: [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          resolve('components'), 
          resolve('src'), 
          resolve('test')
        ],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: utils.cssLoaders(styleOptions) }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('components'),
          resolve('src'),
          resolve('test'),
          resolve('node_modules/@material')
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }]
    })
  }
}
