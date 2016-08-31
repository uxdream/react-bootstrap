var path = require('path');

var autoprefixer = require('autoprefixer');
var Html         = require('html-webpack-plugin');
var Webpack      = require('webpack');

module.exports = {
  context: path.resolve('./dev'),
  devtool: '#source-map',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 9000,
  },
  entry: [
    './index.js',
    './index.scss',
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          comments: false,
          compact: true,
          presets: [
            'es2015',
            'react',
            'react-hmre',
            'stage-0',
          ],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.woff$/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./build'),
    publicPath: 'http://localhost:9000/',
  },
  plugins: [
    new Html({
      minify: {
        collapseWhitespace: true,
      },
      showErrors: false,
      template: './index.html',
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  postcss: function postcss() {
    return [
      autoprefixer,
    ];
  },
  resolve: {
    alias: {
      bootstrap: path.resolve('./node_modules/bootstrap/scss'),
    },
  },
};