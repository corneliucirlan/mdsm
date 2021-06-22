const webpack = require("webpack"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	StyleLintPlugin = require("stylelint-webpack-plugin"),
	autoprefixer = require("autoprefixer")

module.exports = {
	context: __dirname,
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
	]
}
