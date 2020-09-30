const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin")
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Generic Head Title",
      template: 'index.html'
    }),
    new HandlebarsPlugin({

      htmlWebpackPlugin: {
        enabled: true,
        prefix: "html",
        HtmlWebpackPlugin
      },

      entry: path.join(process.cwd(), "src", "**", "*.hbs"),
      output: path.join(process.cwd(), "dist", "[name].html"),
    }),
    new HotModuleReplacementPlugin()
  ]
};