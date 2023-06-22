const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: {
		// index: {
		// 	import: './src/index.js',
		// 	dependOn: 'shared',
		// },
		// another: {
		// 	import: './src/another-module.js',
		// 	dependOn: 'shared',
		// },
		// shared: 'lodash',

		index: './src/index.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
	],
	// optimization: {
	// 	// runtimeChunk: 'single',
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },
};
