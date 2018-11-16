const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    // mode: 'production', // production 会压缩  development不会压缩
    entry: path.join(__dirname, './src/main.js'), // 要打包哪个文件
    output: {
        path: path.join(__dirname, 'dist'), // 指定打包的文件输出到哪个目录下去(若无此目录则会自动创建)
        filename: 'my-bundle.js' // 指定打包好的文件名
    },

    devServer: {
        port: 3000,
        open: true,
        hot: true,
        contentBase: 'src'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    }
}