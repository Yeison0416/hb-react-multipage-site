const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/main_index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.json$/,
        loader: ['json-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Production'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
    new StyleLintPlugin()
  ]
}
