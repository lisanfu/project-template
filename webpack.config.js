const path = require('path');
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
		another: './src/another-module.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[bundle].js',
		clean: true,
	},
	optimization: {
		// runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},
};
