const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ConsoleLogOnBuildWebpackPlugin = require('./lib/plugins/ConsoleLogOnBuildWebpackPlugin');
module.exports = {
	mode: 'development',
	entry: {
		main: './src/main.js',
		index: {
			dependOn: 'main',
			import: './src/index.js',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpe?g|gif|webp)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new ConsoleLogOnBuildWebpackPlugin(),
		new HtmlWebpackPlugin({
			teemplate: './public/index.html',
		}),
	],
};
