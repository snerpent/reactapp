const	HtmlWebpackPlugin = require('html-webpack-plugin'),
		path = require('path'),
		webpack = require('webpack'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		cssDev = ['style-loader','css-loader','sass-loader'],
		cssProd = ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader','sass-loader'],
				publicPath: '/dist'
			});

var		isProd = process.env.NODE_ENV === 'production',
		cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  //context: "./src/js/scripts.js",
  //devtool: debug ? "inline-sourcemap" : null,
  entry: {
	  app:'./src/js/client.js',
  },

  module: {

	  loaders: [

		{
			test: /\.scss$/,
			use: cssConfig
			
			/*ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader','sass-loader'],
				publicPath: 'dist'
			})
			use: ['style-loader','css-loader','sass-loader']*/
		},
		
		{
			test:/\.js?$/,
			exclude: /node_modules/,
			use: 'babel-loader'

		},
		  
		{
			test:/\.pug$/,
			use: 'pug-loader'
		},
		
		{
			test:/\.(jpe?g|png|gif|svg)$/i,
			use: 'file-loader?name=[name].[ext]&outputPath=images/'
		}


		
	  ]
  },

  devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  compress: true,
	  stats: "errors-only",
	  hot: true,
	  open: true
  },

  output: {
	  path: path.join(__dirname,'dist'),
	  filename: '[name].bundle.js'
  },

  plugins: [
	  new HtmlWebpackPlugin({
		  title: 'Project Demo',
		  // minify: {
		  //collapseWhitespace: true
		  // },
		  excludeChunks: ['contact'],
		  hash: true,
		  template: './src/index.html',
	  }),

	  new ExtractTextPlugin({
		  filename: 'app.css',
		  disable: !isProd,
		  allChunks: true,
	  }),

	  new webpack.HotModuleReplacementPlugin(),

	  new webpack.NamedModulesPlugin()
  
  ]

};
