const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3000,
    contentBase: './public',
    hot: true
  }
}
