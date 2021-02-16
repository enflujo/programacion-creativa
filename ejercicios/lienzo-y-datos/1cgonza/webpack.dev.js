const path = require('path');
const base = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'www'),
  },
  module: {
      
    rules: [
        {
  test: /\.(txt|csv|mmdb)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: "[path][name].[ext]",
        emitFile: true,
      },
    },
  ],
},
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env', 'autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
});
