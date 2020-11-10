const path = require("path"),
	webpack = require("webpack"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"),
	StyleLintPlugin = require("stylelint-webpack-plugin"),
	UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
	autoprefixer = require("autoprefixer")

module.exports = {
	context: __dirname,
	entry: {
		"dist/js/mdsm.min": path.resolve(__dirname, "src/js/mdsm.js"),
		"dist/css/mdsm.min": path.resolve(__dirname, "src/css/mdsm.sass")
	},
	output: {
		path: path.resolve(__dirname),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				enforce: "pre",
				exclude: /node_modules/,
				test: /\.jsx$/,
				loader: "eslint-loader",
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.s?[ac]ss|css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		new StyleLintPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					autoprefixer()
				],
			},
		}),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
	},
	externals: {
		jquery: "jQuery",
	},
}
