const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
class ConsoleLogOnBuildWebpackPlugin {
	apply(compiler) {
		compiler.hooks.run.tap(pluginName, () => {
			console.log('webpack 正在构建启动');
		});
	}
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
