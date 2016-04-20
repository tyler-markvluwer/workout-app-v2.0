module.exports = {
	entry: './app/boot',
	output: {
		path: __dirname,
		filename: "./dist/bundle.js"
	},
	resolve: {
		extension: ['', '.js', '.ts']
	},
	module: {
		loaders: [{
			test: /\.ts/, loaders: ['ts-loader'], exlcude: /node_modules/
		}]
	}

}