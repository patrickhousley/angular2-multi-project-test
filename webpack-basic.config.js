'use strict'
const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const StatsPlugin = require('stats-webpack-plugin');
const webpack = require('webpack');

const testHTML = path.resolve(__dirname, 'submodules', 'index.html');

module.exports = {
  devtool: '',
  profile: true,

  entry: {
    'polyfills': [
      './submodules/app1/polyfills.ts',
      './submodules/app2/polyfills.ts',
      './submodules/app3/polyfills.ts'
    ],
    'app1': ['./submodules/app1/index.ts'],
    'app2': ['./submodules/app2/index.ts'],
    'app3': ['./submodules/app3/index.ts']
  },

  output: {
    path: path.join(__dirname, 'dist', 'basic'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          'css-loader'
        ]
      },
    ]
  },

  plugins: [
    new StatsPlugin('stats.json', 'verbose'),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        drop_debugger: true,
        unused: true,
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),

    new SplitByPathPlugin(
      [
        {
          name: 'vendors',
          path: path.join(__dirname, 'node_modules')
        }
      ],
      {
        manifest: 'manifest',
        ignoreChunks: [
          'polyfills'
        ]
      }
    ),

    new TsConfigPathsPlugin(),
    new HtmlWebpackPlugin({
      template: testHTML,
      inject: false
    }),

    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ],

  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
}
