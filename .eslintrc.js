module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	// parser: 'esprima',
	parserOptions: {},
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	rules: {
		// 'no-console': 'error',
		// semi: 'error',
		'prettier/prettier': 'error',
	},
};
