const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
		clean: true,
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	optimization: {
		runtimeChunk: 'single',
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
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ['csv-loader'],
			},
			{
				test: /\.xml$/i,
				use: ['xml-loader'],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		// new CleanWebpackPlugin(),
		new ConsoleLogOnBuildWebpackPlugin(),
		new HtmlWebpackPlugin({
			teemplate: './public/index.html',
		}),
	],
};
