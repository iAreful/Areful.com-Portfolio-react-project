/** @format */

const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	plugins: [new CompressionPlugin()],
	minimizer: [
		new UglifyJsPlugin({
			uglifyOptions: {
				warnings: false,
				parse: {},
				compress: {},
				mangle: true, // Note `mangle.properties` is `false` by default.
				output: null,
				toplevel: false,
				nameCache: null,
				ie8: false,
				keep_fnames: false,
			},
		}),
	],
};
