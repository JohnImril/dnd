"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle-[hash].js",
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
				loader: "ts-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
