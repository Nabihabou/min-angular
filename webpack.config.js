// webpack.config.js

module.exports = {
  devtool: 'sourcemap',
  entry: './src/main.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
