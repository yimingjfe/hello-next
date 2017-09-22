/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const autoprefixer = require('autoprefixer')
const trash = require('trash')
const fs = require('fs')
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
                console.log('trash')
                trash(fileName)

                return ['module.exports = {',
                  `classNames: ${classNames},`,
                  `stylesheet: \`${content}\``,
                  '}'
                ].join('')
              }
            }
          },
          'postcss-loader'
        ]
      }
    )

    // config.module.rules.push({
    //   test: /\.css$/,
    //   include: /node_modules/,
    //   use: ['style-loader', 'css-loader']
    // })

    // config.module.rules.push({
    //   test: /\.css$/,
    //   exclude: /node_modules/,
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         localIdentName: '[hash:8]',
    //         modules: true
    //       }
    //     }
    //   ]
    // })

    return config
  }
}
