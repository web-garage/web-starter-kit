const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devserver = require('./webpack/devserver.module');

module.exports = merge(common, devserver(), {
  devtool: 'inline-source-map',
});
