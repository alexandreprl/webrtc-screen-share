const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.json$/,
                type: 'json',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
    externals: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './public/index.html', // Output filename in dist
        })
    ],
};