const HtmlWebPackPlugin = require("html-webpack-plugin")

// Merge webpack configs
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
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
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	]
})
