//var webpack = require("webpack");
var path = require('path');
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');
module.exports = {
    target: "web",
    debug : true,
    context: path.join(__dirname, 'src'), // исходная директория
    entry : './index.js',
    output : {
        path : path.join(__dirname, '../assets/game/js'),
        filename : 'bundle.js'
    },
    devtool: 'source-map',

    node: {
        fs: "empty"
    },
    module: {
        loaders: [
            { test: /pixi\.js/, loader: 'expose?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
            { test: /p2\.js/, loader: 'expose?p2' },
            { test: /\.json/, loader: "json-loader" }
        ]
    },
    resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2
        }
    }
}