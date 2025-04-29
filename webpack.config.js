import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Using import.meta.url to get the current directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  entry: './frontend/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
  },
  devtool: 'source-map',
};
