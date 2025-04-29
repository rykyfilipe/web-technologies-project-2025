const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');  // Adăugat pluginul pentru minimizarea CSS-ului

module.exports = {
    mode: 'production',  // Setează modul de producție
    entry: './frontend/index.js',  // Punctul de intrare
    output: {
        filename: 'bundle.js',  // Numele fișierului de ieșire
        path: path.resolve(__dirname, 'dist'),  // Calea către directorul dist
        clean: true,  // Curăță fișierele din dist înainte de a adăuga altele noi
    },
    module: {
        rules: [
            {
                test: /\.css$/i,  // Regula pentru fișierele CSS
                use: ['style-loader', 'css-loader'],  // Loader-e pentru CSS
            },
            {
                test: /\.js$/,  // Regula pentru fișierele JS
                exclude: /node_modules/,  // Exclude node_modules
                use: {
                    loader: 'babel-loader',  // Loader pentru Babel
                    options: {
                        presets: ['@babel/preset-env'],  // Preset pentru transpile la JavaScript compatibil
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html',  // Template pentru fișierul HTML
            filename: 'index.html',  // Numele fișierului HTML de ieșire
        }),
    ],
    optimization: {
        minimize: true,  // Activează minimizarea fișierelor
        minimizer: [
            new CssMinimizerPlugin(),  // Plugin pentru minimizarea fișierelor CSS
        ],
    },
    devtool: 'source-map',  // Ajută la debuggarea codului sursă
};
