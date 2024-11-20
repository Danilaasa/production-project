import webpack, { HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import BundleAnalyzerPlugin from "webpack-bundle-analyzer"

export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options

    const plugins = [
        new HtmlWebpackPlugin({
            template:paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ]

    if (isDev) {
        plugins.push(new HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
    }

    return plugins
}