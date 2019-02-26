const CopyWebpackPlugin = require('copy-webpack-plugin') // 用于拷贝文件
const webpack = require('webpack')

const path = require('path')
const srcDir = path.resolve(__dirname, './src')
module.exports = {
    entry: {
        page: './src/page/page.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve('./dist'),
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': srcDir
        }
    },
    devServer: {
        host: "localhost",
        contentBase: './dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|scss)$/,
                loader: 'vue-style-loader!css-loader!postcss-loader!sass-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name(file) {
                        if (file.match(/\.(png|jpe?g|gif)$/) != null)
                            return 'images/[name].[hash:7].[ext]'
                        else {
                            return '[name].[hash:7].[ext]'
                        }
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './index.html',
                to: './'
            }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}