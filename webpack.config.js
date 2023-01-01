const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
		publicPath: "/",
	},
	mode: "development",
	devServer: {
		historyApiFallback: true,
		// hot: true,
		// contentBase: "./",
		static: {
			directory: path.resolve(__dirname, "./build"),
		},
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
				use: [
					{
						loader: "url-loader",
						// options: {
						// 	limit: 10000,
						// },
					},
				],
			},
			// {
			// 	test: /\.(png|jpe?g|gif|svg)$/i,
			// 	use: [
			// 		{
			// 			loader: "file-loader",
			// 		},
			// 	],
			// },
		],
	},

	resolve: {
		extensions: [".jsx", ".js"],
	},
};
