/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const autoprefixer = require('autoprefixer')
const trash = require('trash')
const fs = require('fs')
const path = require('path')
const { ANALYZE } = process.env

module.exports = {
  webpack: function(config, { dev }) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.plugins.push(new StyleLintPlugin({
      files: ['pages/*.css','components/*.css']
    }))

    config.plugins = config.plugins.filter(
      (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
    )

    config.module.rules.push({
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    })

    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          {
            loader: 'skeleton-loader',
            options: {
              procedure: function (content) {
                const fileName = `${this._module.userRequest}.json`
                const classNames = fs.readFileSync(fileName, 'utf8')
                trash(fileName)

                return ['module.exports = {',
                  `classNames: ${classNames},`,
                  `stylesheet: \`${content}\``,
                  '}'
                ].join('')
              }
            }
          },
          {
            loader: 'postcss-loader',
            options:{
              plugins: [
                // require("stylelint")(),
                require('postcss-easy-import')({ prefix: '_' }), // keep this first
                require('postcss-modules')({
                  generateScopedName: '[local]-[hash:base64:5]'
                }),
                require('precss')(),
                require('cssnano')(),
                // require('postcss-cssnext')({
                //   browsers:[
                //     '>0%',
                //     'last 4 versions',
                //     'Firefox ESR',
                //     'not ie < 8',
                //   ]
                // })
               require('autoprefixer')
              ]
            }
          }
        ]
      }
    )

    return config
  }
}
