const path = require("path"),
	webpack = require("webpack"),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"),
	StyleLintPlugin = require("stylelint-webpack-plugin"),
	UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
	autoprefixer = require("autoprefixer")

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	// entry: {
	// 	"dist/js/mdsm.min": path.resolve(__dirname, "src/js/mdsm.js"),
		// "dist/css/mdsm.min": path.resolve(__dirname, "src/css/mdsm.sass")
	// },
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	// output: {
	// 	path: path.resolve(__dirname),
	// 	filename: "[name].js",
	// },
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
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	],
	optimization: {
		minimizer: [new UglifyJsPlugin(), new OptimizeCssAssetsPlugin()],
	}
	// externals: {
	// 	jquery: "jQuery",
	// },
}
