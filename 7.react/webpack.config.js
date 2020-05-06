const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        home: path.resolve(__dirname, "src/js/index.js"),
    },
    mode: "development",
    // mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    // "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack con React & Babel",
            template: path.resolve(__dirname, "index.html"),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new MiniCSSExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    devServer: {
        host: "localhost",
        port: 3000,
        open: true,
        hot: true,
    },
};
