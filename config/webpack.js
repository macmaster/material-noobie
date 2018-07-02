const path = require('path');
const src_dir = 'client';
const build_dir = 'site';

module.exports = {
  mode: 'development',
  entry: path.resolve(src_dir, 'index.js'),

  output: {
    filename: '[name].bundle.js',
    path: `${path.resolve(build_dir)}/js`,
  },

  module: {
    rules: [{ 
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
};
