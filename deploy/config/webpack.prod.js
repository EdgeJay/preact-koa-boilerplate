const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const base = require('./webpack.base.js');

base.resolve.alias['preact$'] = 'preact/dist/preact.min';
base.resolve.alias['preact-compat'] = 'preact-compat/dist/preact-compat.min';
base.module.rules[2] = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader?camelCase&importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader'
  }),
  include: [path.resolve(__dirname, '../../client'), path.resolve(__dirname, '../../node_modules/milligram')]
};

module.exports = Object.assign({}, base, {
  output: {
    path: path.resolve(__dirname, '../../public/assets/js'),
    filename: '[name].min.js',
    publicPath: '/assets/js/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
    new ExtractTextPlugin('../css/styles.css'),
  ],
});
