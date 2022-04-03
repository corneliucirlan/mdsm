const HtmlWebPackPlugin = require("html-webpack-plugin"),
	FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// Merge webpack configs
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		index: {
			import: './src/index.js',
			// dependOn: 'jquery'
		},
		mdsmJQuery: {
			import: './src/js/mdsm.jquery.js',
			dependOn: 'jquery'
		},
		mdsmVanilla: {
			import: './src/js/mdsm.vanilla.js'
		},
		jquery: 'jquery'
	},
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},

			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new FaviconsWebpackPlugin('./src/js/demo/assets/icon.svg')
	]
})
