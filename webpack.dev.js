const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    target: ['web', 'es5']
});
