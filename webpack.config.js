const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [  
    new HtmlWebpackPlugin(),
    new HotModuleReplacementPlugin()
  ]
};