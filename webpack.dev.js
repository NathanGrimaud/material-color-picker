const merge = require('webpack-merge');
const commons = require('./webpack.common.js');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = commons.map(common =>
  merge(common, {
    mode: 'development',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      // hot: true,
      historyApiFallback: {
        disableDotRule: true
      }
    },
    devtool: 'inline-source-map',
    plugins: []
  })
);
