const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        { 
            test: /\.less$/,
            use: [ 
                'style-loader',
                'css-loader', 
                'less-loader'
            ],
        },
    ]
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