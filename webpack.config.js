const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// TODO add sourcemap

//make plugins list
let pluginsList = [
	new ExtractTextPlugin({
		filename: 'style.css',
	 })
]

if(process.argv.indexOf('-p') !== -1){
	pluginsList.push(
		new webpack.optimize.UglifyJsPlugin({
	      output: {
	        comments: false,
	      },
	    })
	);
}

module.exports = {
  entry: {
	  main: [
		  `${__dirname}/src/index.js`,
		  `${__dirname}/src/styles/main.scss`,
	  ]
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {test: /.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
	  {test: /\.(css|scss)/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
    ],
  },
  plugins: pluginsList
};
