"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle-[contenthash].js",
		assetModuleFilename: "images/[hash][ext][query]",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			three: path.resolve("./node_modules/three"),
		},
	},
	devServer: {
		static: path.join(__dirname, "src"),
		compress: true,
		allowedHosts: "all",
		port: 3000,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(glb|dds)$/i,
				type: "asset/resource",
				generator: {
					filename: "models/[name][hash][ext]",
				},
			},
			{
				test: /\.(png|jpe?g|gif|avif|ico)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[name][contenthash][ext]",
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
		runtimeChunk: "single",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body",
		}),
	],
};
