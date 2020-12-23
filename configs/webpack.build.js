const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {merge} = require('webpack-merge');
const webpackMainConfig = require('./webpack.main');
const path = require('path');
const distPath = path.resolve(__dirname, "../dist");

module.exports = merge(webpackMainConfig, {
  mode: "production",
  output: {
    path: distPath,
    filename: "[name].[hash].js"
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});
