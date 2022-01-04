const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './src/assets/favicon.ico'
        })
    ],
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
            Styles: path.resolve(__dirname, './src/styles/'),
            Scripts: path.resolve(__dirname, './src/js/'),
            Assets: path.resolve(__dirname, './src/assets'),
            Components: path.resolve(__dirname, './src/js/components'),
            Views: path.resolve(__dirname, './src/js/views')
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    target: ['web', 'es5']
};
