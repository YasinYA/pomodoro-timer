const path = require('path');
const webpack = require('webpack');
const {port, dev_path} = require('./config');

module.exports = {
    context: __dirname,
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, './src/app.js'),
        `webpack-hot-middleware/client?path=${dev_path}:${port}/__webpack_hmr`
    ],
    target: 'electron-renderer',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/',
        publicPath: `${dev_path}:${port}/build/`,
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src'),
                ],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }, {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'src'),
                ],
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
