const path = require("path"),
	webpack = require("webpack"),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts'),
	StyleLintPlugin = require("stylelint-webpack-plugin"),
	TerserPlugin = require('terser-webpack-plugin'),
	autoprefixer = require("autoprefixer")

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devtool: 'eval',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js'
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
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							sourceMap: true,
							hmr: process.env.NODE_ENV === 'development'
						},
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new RemoveEmptyScriptsPlugin(),
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
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	],
	optimization: {
		minimize: true,
    	minimizer: [new TerserPlugin({
			parallel: true
		})],
	}
}
