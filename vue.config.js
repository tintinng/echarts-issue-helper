const path = require('path')
const merge = require('deepmerge')

module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      symlinks: false
    },
    devtool: 'source-map'
  },

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
        .use('raw-loader')
        .loader('raw-loader')

    config.module.rule('stylus').oneOf('vue').use('postcss-loader')
      .tap(options =>
        merge(options, {
          config: {
            path: path.resolve(__dirname, '.postcssrc')
          }
        })
      )

    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }
}
