'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../multiConfig')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    openPage: '_menu.html',
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true,
    } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),

    // 多页开发需要 CommonsChunkPlugin
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['school', 'teacher'],
        minChunks: 2
    }),

    new HtmlWebpackPlugin({
      filename: 'apps/school/index.html',
      template: 'index.html',
      chunks: ['vendor', 'school'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'apps/teacher/index.html',
      template: 'index.html',
      chunks: ['vendor', 'teacher'],
      inject: true
    })
  ]
})

var pages = [
    {url: '/apps/school/index.html', name: '学校端'},
    {url: '/apps/teacher/index.html', name: '教师端'}
]
var links = []
for (var i = 0, len = pages.length; i < len; i++) {
    links.push(`<li><a target="_blank" href="${pages[i].url}">${i}-${pages[i].name}</a></li>`)
}

devWebpackConfig.plugins.push(new HtmlWebpackPlugin({
  filename: '_menu.html',
  templateContent: function() {
      return `<!DOCTYPE html><html>
      <style></style>
      <head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>目录</title><meta name="no-need-script">
      </head><body><div>
      <ul>${links.join('')}</ul>
      </body></html>`
  },
  inject: false
}))

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          // messages: [`Your application is running here: http://${config.dev.host}:${port}/apps/school/index.html`],
          messages: [`Your application is running here: http://${config.dev.host}:${port}/apps/school/index.html`],
          notes: ['dz科技--多页面开发成功启动!']
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
