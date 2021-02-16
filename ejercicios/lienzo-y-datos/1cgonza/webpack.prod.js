const path = require('path');
const base = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  target: ['es5', 'browserslist'],
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
          MiniCssExtractPlugin.loader,
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
<<<<<<< Updated upstream:ejercicios/lienzo-y-datos/1cgonza/webpack.prod.js
=======
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
>>>>>>> Stashed changes:proyecto visualización/webpack.prod.js
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
});
