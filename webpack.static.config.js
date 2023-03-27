const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/about.js',
    './src/js/projects.js',
    './src/js/darkmode.js',
    './src/js/formvalidation.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js/'),
  },
};