const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const applicationsPath = require('./application.path')

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true'

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: false,
    },
    plugins: [
        new CleanWebpackPlugin({
            root: process.cwd(),
            verbose: true,
            dry: false,
            path: path.resolve(__dirname, '../build'),
        }),
        new OptimizeCssAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: `${applicationsPath}[name].[hash:8].css`,
            chunkFilename: '[id].[hash:8].css',
        }),
        new ManifestPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
            openAnalyzer: true,
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(require(`${path.resolve(__dirname)}/env.prod.json`)),
        }),
    ],
})
