module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'nativewind/babel',
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'@/navigation': './src/navigation',
					'@/screens': './src/screens',
					'@/interface': './src/interface',
					'@/contexts': './src/contexts',
					'@/utils': './src/utils',
					'@/components': './src/components',
					'@/hooks': './src/hooks',
					'@/api': './src/api'
				}
			}
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env'
			}
		]
	]
}
