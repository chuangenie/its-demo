const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development', // production 会压缩  development不会压缩
    entry: path.join(__dirname, './src/main.js'), // 要打包哪个文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 指定打包的文件输出到哪个目录下去(若无此目录则会自动创建)
        filename: 'my-bundle.js' // 指定打包好的文件名
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /.(png|jpg|gif|bmp|webp)$/,
                use: [{
                    loader: 'url-loader?limit=14240&name=[hash:8]-[name].[ext]',
                    options: {
                        limit: 8192 // 限制: 图片的最大大小, 如果超过了最大限制将会以原图片打包, 如果小于限制则会通过 base64 进行转码
                    }
                }]
            },
            { test: /.(eot|ttf|woff|woff2|svg)$/, use: 'url-loader' },
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            }
        ]
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
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }
}