const Visualizer = require('webpack-visualizer-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	devtool: '#inline-source-map',
	plugins: [new Visualizer(), new WriteFilePlugin()],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.jsx?$/,
				include: __dirname,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							[
								/* on production don't forget this:
								'transform-react-remove-prop-types', {
									'mode': 'wrap',
									'ignoreFilenames': ['node_modules']
						        }
								*/
								'transform-runtime',
								{
									helpers: false,
									polyfill: false,
									regenerator: true
								}
							]
						],
						presets: [
							[
								'env',
								{
									modules: false,
									targets: {
										browsers: ['last 4 versions', 'safari >= 7', 'IE 11']
									}
								}
							],
							'react',
							'stage-0'
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: ['./src/sass/main.scss']
						}
					}
				]
			},
			{
                test: /\.jpg$/,
                use: 'file-loader'
            }
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
		extensions: ['.js', '.jsx', '.es6']
	}
}
