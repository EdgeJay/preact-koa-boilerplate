require('dotenv').load();

const webpack = require('webpack');

const path = require('path');

const fs = require('fs');

const base = require('./webpack.base.js');

base.output.publicPath = `http://${process.env.WEBPACK_DEV_SERVER_URL}/assets/js/`;

base.entry.bundle.unshift('webpack/hot/only-dev-server');
base.entry.bundle.unshift(`webpack-dev-server/client?http://${process.env.WEBPACK_DEV_SERVER_URL}`);
base.entry.bundle.unshift('react-hot-loader/patch');

base.plugins.push(new webpack.HotModuleReplacementPlugin()); // enable HMR globally
base.plugins.push(new webpack.NamedModulesPlugin()); // more readable module names for debugging in browser console
base.plugins.push(new webpack.NoEmitOnErrorsPlugin());

module.exports = Object.assign({}, base, {
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: [path.resolve(__dirname, '../../resources')],
  },
});
