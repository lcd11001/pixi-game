const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
    game: './src/pixi_game.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // unrem this line for debug
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin([
      'dist'
    ])
  ],

  optimization: {
    splitChunks: {
      name: 'common'
    }
  },

  // mode: 'development'
  mode: 'production',

  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },

      {
        test: /\.(xml)$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
