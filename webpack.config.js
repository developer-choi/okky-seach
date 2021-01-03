const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name][hash].js'
  },
  module: {
    rules: [
      {test: /\.(ts|tsx)$/, loader: 'babel-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html', favicon: 'favicon.ico'})
  ]
};
