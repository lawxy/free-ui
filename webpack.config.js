const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const fs = require('fs')
const entry = {} //入口
// fs.readdir('./src/components', (err, dirs) => {
//     // console.log(dirs)

//     dirs.forEach((dir) => {
//         const src = path.resolve(__dirname, './src/components', dir)
//         fs.stat(src, (err, stat) => {
//             if (stat.isDirectory() && dir !== 'typings') {
//                 entry[]
//             }
//         })
//     })
// })
console.log(path.resolve(__dirname, './src/components'))
function getEntry(src) {
    let dirs = fs.readdirSync(src);
    dirs.forEach((dir) => {
        if (dir == 'typings') return;
        const newSrc = path.resolve(__dirname, src, dir)
        let stat = fs.statSync(newSrc)
        if (stat.isDirectory()) getEntry(newSrc)
    })
    ///Users/beisen/Desktop/code/demo/ui/free/src/components -> components
    let name = src.replace(path.resolve(__dirname, './src/components'), '');
    // console.log(name)
    if (name == '') newName = 'index';
    // let i = name.lastIndexOf('/');
    // if (i > -1) newName = name.substring(i + 1)
    entry['lib' + name] = src

    // fs.readdir(src, (err, dirs) => {
    //     dirs.forEach((dir) => {
    //         if (dir == 'typings') return;
    //         const newSrc = path.resolve(__dirname, src, dir)
    //         fs.stat(newSrc, (err, stat) => {
    //             if (stat.isDirectory()) getEntry(newSrc)
    //         })
    //     })
    //     ///Users/beisen/Desktop/code/demo/ui/free/src/components -> components
    //     let name = src.replace(path.resolve(__dirname, './src/components'), '');
    //     console.log(name)
    //     if (name == '') newName = 'index';
    //     // let i = name.lastIndexOf('/');
    //     // if (i > -1) newName = name.substring(i + 1)
    //     entry['lib' + name] = src
    // })
}
getEntry(path.resolve(__dirname, './src/components'))
// setTimeout(() => console.log(entry), 3000)


module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        filename: '[name]/index.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {  // 分割代码块
            cacheGroups: {  // 缓存组
                common: {  // 公共的模块
                    chunks: 'initial',
                    minSize: 30000,  // 最少多少字节需要抽离
                    minChunks: 2 // 用过几次以上需要抽离
                },
                vendor: { // 第三方的模块
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,  // 最少多少字节需要抽离
                    minChunks: 5,
                    priority: 1  //权重  先抽离这个再走common
                }
            }
        }
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
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.BannerPlugin('make 2020 by Roddan')
    ]
}