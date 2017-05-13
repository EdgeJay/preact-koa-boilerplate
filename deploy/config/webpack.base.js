require('dotenv').load();

const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: {
    bundle: ['./client/index.js'],
    vendor: ['preact']
  },
  output: {
    path: path.resolve(__dirname, '../../public/assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname, '../../client'), path.resolve(__dirname, '../../test')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader?cacheDirectory=true'
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?camelCase&importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader'
      ],
      include: [path.resolve(__dirname, '../../client'), path.resolve(__dirname, '../../node_modules/milligram')]
    }]
  },
  target: 'web',
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  resolve: {
    alias: {
      'preact-compat': 'preact-compat/dist/preact-compat',
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
};
