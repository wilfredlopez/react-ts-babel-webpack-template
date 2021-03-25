//@ts-check
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/**
 * @type {Partial<webpack.WebpackOptionsNormalized>}
 */
const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Wilfred'),
    }),
  ],
}

module.exports = config
