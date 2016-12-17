var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var devServer = new WebpackDevServer(
    webpack(config),
    {
        contentBase: __dirname,
        publicPath: '/build/',
        inline : true,
        historyApiFallback: true,
        hot: true
    }
).listen(8088, 'localhost');