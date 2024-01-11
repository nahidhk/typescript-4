const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ],
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  resolveLoader: {
    modules:[
      'node_modules',
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules|cdn_modules/
      }
    ]
  },
  devServer: {
    port: 9950,
    static: {
      directory: './dist'
    }
  }
};

module.exports = config;
