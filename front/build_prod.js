var path = require('path');
var webpack = require('webpack');
var config = {
    entry : './src/index.js',
    output : {
        path : '../assets/js/build',
        filename : 'bundle_prod.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
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
            }
        ]
    }
};
var compiler = webpack(config);
compiler.run(function (err, stats) {
    console.log(stats.toJson()); // по завершению, выводим всю статистику
    console.log(err);
});