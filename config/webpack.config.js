const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
module.exports = config;
