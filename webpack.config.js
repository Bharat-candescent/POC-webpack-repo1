const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: './src/bootstrap.jsx',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry-host.js',
      remotes: {},
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'react-router-dom': { singleton: true, requiredVersion: deps['react-router-dom'] },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};