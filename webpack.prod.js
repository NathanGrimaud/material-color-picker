const merge = require('webpack-merge');
const commons = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = commons.map(common =>
  merge(common, {
    devtool: 'source-map',
    plugins: [
      new UglifyJsPlugin({
        sourceMap: true
      })
    ]
  })
);
