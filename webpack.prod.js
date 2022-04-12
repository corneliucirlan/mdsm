const path = require("path"),
	TerserPlugin = require('terser-webpack-plugin'),
	RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')

// Merge webpack configs
const { merge } = require('webpack-merge')

// Common webpack config
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	entry: {
		"dist/js/mdsm.jquery.min": path.resolve(__dirname, "src/js/mdsm.jquery.js"),
		"dist/js/mdsm.vanilla.min": path.resolve(__dirname, "src/js/mdsm.vanilla.js"),
		"dist/css/mdsm.min": path.resolve(__dirname, "src/css/mdsm.sass")
	},
	output: {
		path: path.resolve(__dirname),
		filename: "[name].js",
	},
	plugins: [
		new RemoveEmptyScriptsPlugin()
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin()
		]
	},
	externals: {
		jquery: "jQuery",
	},
})
