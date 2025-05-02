const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',

    // Fișierul de start al aplicației
    entry: './frontend/index.js',

    // Configurația fișierului de ieșire (build)
    output: {
        // Nume fișier JavaScript cu hash pentru cache busting
        filename: '[name].[contenthash].js',
        // Directorul unde se salvează fișierele generate
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },

    // Reguli pentru cum se procesează diferite tipuri de fișiere
    module: {
        rules: [
            {
                // Pentru fișiere .css
                test: /\.css$/i,
                use: [
                    // În development injectează CSS în <style>, în producție îl extrage
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader' // Traduce CSS-ul în JS
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpilează JS modern în JS compatibil
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
        ],
    },

    plugins: [
        // Creează un fișier index.html și injectează automat scripturile
        new HtmlWebpackPlugin({
            template: './frontend/index.html',
            filename: 'index.html',
        }),
        // Adaugă pluginul de extragere CSS doar în producție
        ...(isDev ? [] : [new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })])
    ],

    optimization: {
        minimize: !isDev,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(), // Minimiza CSS-ul
        ],
        splitChunks: {
            chunks: 'all', // Împarte codul în bucăți reutilizabile
        },
        runtimeChunk: 'single', // Separă codul de runtime într-un fișier propriu
    },

    devtool: isDev ? 'eval-source-map' : 'source-map',

    // Server local pentru development
    devServer: isDev ? {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    } : undefined
};
