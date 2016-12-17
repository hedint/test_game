//var webpack = require("webpack");
var path = require('path');

module.exports = {
    target: "web",
    debug : true,
    context: path.join(__dirname, 'src'), // исходная директория
    entry : './index.js',
    output : {
        path : path.join(__dirname, '../assets/js/build'),
        filename : 'bundle.js'
    },
    devtool: 'source-map',

    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            {
                test    : /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets        : ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-object-rest-spread', 'transform-object-assign'],
                    cacheDirectory : true
                }
            },
            { test: /\.json/, loader: "json-loader" }
        ]
    }
}