var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'workspaces.js',
    path: DIST_DIR
  },
  mode: 'development',
  module: {
    rules: [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
       }
      }
    ],
  }
};