var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            include: APP_DIR,
            use: 'babel-loader'
        }]
    }
    /*,
     plugins: [
       new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
       }),
       new webpack.optimize.UglifyJsPlugin()]*/
};

module.exports = config;