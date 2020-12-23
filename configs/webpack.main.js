const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const appPath = path.resolve(__dirname, "../src/index.jsx");
const templatePath = path.resolve(__dirname, "../src/index.html");

module.exports = {
  entry: ["@babel/polyfill", appPath],
  plugins: [
    new HTMLWebpackPlugin({template: templatePath}),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
    ]
  }
};
