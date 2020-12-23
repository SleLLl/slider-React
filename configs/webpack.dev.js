const HTMLWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const webpackMainConfig = require('./webpack.main');

module.exports = merge(webpackMainConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
  },
  plugins: [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
  ],
});
