const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const merge = require('webpack-merge');
const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              includePaths: ['node_modules', 'bower_components', 'src', '.']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './exemple/index.html'),
      title: 'material-color-picker exemple',
      alwaysWriteToDisk: true
    }),

    new HtmlWebpackHarddiskPlugin()
  ]
};

module.exports = [
  merge(baseConfig, {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'material-color-picker.js',
      library: 'MaterialColorPicker',
      libraryTarget: 'umd',
      globalObject: 'this',
      libraryExport: 'default'
    }
  }),
  merge(baseConfig, {
    entry: './exemple/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'exemple.js'
    }
  })
];
