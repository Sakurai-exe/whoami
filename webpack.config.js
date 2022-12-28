const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
		publicPath: "/",
		// historyApiFallback: true,
	},
	mode: "development",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		// historyApiFallback: {
		// 	index: "dist/index.html",
		// },
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},

	resolve: {
		extensions: [".jsx", ".js"],
	},
};
