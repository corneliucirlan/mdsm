const HtmlWebPackPlugin = require("html-webpack-plugin"),
	FaviconsWebpackPlugin = require('favicons-webpack-plugin')

// Merge webpack configs
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		index: {
			import: './src/index.js',
			// dependOn: 'jquery'
		},
		mdsm: {
			import: './src/js/mdsm.vanilla.js',
			// dependOn: 'jquery'
		},
		// jquery: 'jquery'
	},
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [

			// HTML
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
