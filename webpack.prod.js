const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const common = require('./webpack.common');
const images = require('./webpack/images.module');

module.exports = merge(common, images(), {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      sourceMap: false,
      cache: true,
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/assets/favicon.png'),
      prefix: 'images/favicons/icons',
      statsFilename: 'iconstats.json',
      persistentCache: false,
    }),
  ],
});
