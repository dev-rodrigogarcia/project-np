const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')
const applicationsPath = require('./application.path')

const mapStyle = process.env.MAP_STYLE === 'true'

module.exports = merge(common, {
    entry: ['react-hot-loader/patch', path.resolve(__dirname, '../src', 'index.tsx')],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        overlay: true,
        open: true,
        stats: 'errors-only',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: mapStyle ? 'css-loader?sourceMap' : 'css-loader' }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${applicationsPath}[name].[hash:8].css`,
        }),

        new webpack.DefinePlugin({
            'process.env': JSON.stringify(require(`${path.resolve(__dirname)}/env.dev.json`)),
        }),
    ],
})
