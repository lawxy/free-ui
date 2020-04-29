const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        // port: 4000,
        // open: true,
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader'
                    , 'css-loader'
                    , 'postcss-loader'
                    , 'less-loader'
                ] 
            },
            {
                test: /\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less'],
        // alias: {
        //     '@': path.resolve(__dirname, './src')
        // }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}