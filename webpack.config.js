const path = require('path');
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
};
