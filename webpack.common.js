import fs from 'fs';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const bd = fs.readFileSync('./admin/datos.db', 'utf-8');
let entradas = [];

if (bd) {
  entradas = JSON.parse(bd).collections[0].data;
  entradas = entradas.sort((a, b) => (a.fecha < b.fecha ? 1 : -1)).filter((entrada) => entrada.exportada);
}

export default {
  entry: './src/programa.js',
  output: {
    path: path.resolve(__dirname, `./docs`),
    publicPath: './',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: './index.html',
      template: './src/index.ejs',
      entradas: entradas,
    }),
  ],
};
