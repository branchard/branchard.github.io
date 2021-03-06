const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env){

	let isProduction = process.argv.indexOf('-p') !== -1;
	let isStats = env && env.stats;
	//let outputDir = isStats ? `${__dirname}/log` : `${__dirname}/build`;
	let outputDir = `${__dirname}`;
	//make plugins list
	let pluginsList = [];

	if(isStats){
		pluginsList.push(new BundleAnalyzerPlugin());
	}else{
		pluginsList.push(new ExtractTextPlugin({filename: `build/style.css`}));
	}

	if (isProduction) {
	    pluginsList.push(new webpack.optimize.UglifyJsPlugin({
	        output: {
				// remove comments
	            comments: false
	        },
			compress: {
	         	// remove warnings
	            warnings: false,

	         	// Drop console statements
	            drop_console: true
       		}
	    }));
		if(!isStats){
			pluginsList.push(new HtmlWebpackPlugin({
				hash: true,
				template: 'src/template.html'
			}));
		}
	}

	// make use list for css/scss modules
	let use = [
		{
			loader: "css-loader",
			options: {
				sourceMap: !isProduction
			}
		}, {
			loader: "sass-loader",
			options: {
				sourceMap: !isProduction
			}
		}
	];

	if(!isStats){
		use = ExtractTextPlugin.extract({
			use: use
		});
	}

	return ({
	    entry: {
	        main: [`${__dirname}/src/index.js`, `${__dirname}/src/styles/main.scss`]
	    },
	    output: {
	        path: outputDir,
	        publicPath: '/',
	        filename: `${isStats ? "log" : "build"}/bundle.js`
	    },
	    resolve: {
	        extensions: ['.js', '.jsx']
	    },
	    module: {
	        rules: [
	            {
	                test: /.jsx?$/,
	                exclude: /node_modules/,
	                loader: 'babel-loader'
	            }, {
	                test: /\.(css|scss)/,
	                use: use
	            }
	        ]
	    },
	    plugins: pluginsList
	});
};
