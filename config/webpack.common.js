const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const applicationsPath = require('./application.path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src', 'index.tsx'),
    },
    output: {
        filename: `${applicationsPath}[name].[hash].js`,
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        historyApiFallback: true,
        overlay: true,
        open: true,
        hot: true,
        disableHostCheck: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|gif|png|jpeg|svg|jpg)$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'not_exist_path')],
                loader: 'style!css',
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.tsx', '.ts'],
    },
}
