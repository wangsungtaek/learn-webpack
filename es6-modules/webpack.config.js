var path = require('path');

module.exports = {
  mode: 'none',
  entry: './js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};