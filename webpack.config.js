const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
            // favicon: './src/assets/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './assets/[name].[ext]'
                            // outputPath: 'assets/'
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
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        compress: true,
        port: 8080
    }
};
