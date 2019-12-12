// module.exports = {
//   entry: './src/Index.jsx',
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './dist',
//   },
//   module: {
//     rules: [{
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       use: ['babel-loader']
//     }]
//   },
// };

var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx?/],
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }
};