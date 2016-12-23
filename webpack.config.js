const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './js/app.js',
    './css/style.css'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
				include: __dirname,
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: 'json-loader',
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
			    test: /\.(png|gif|jpg|cur|pdf)$/,
			    loader: "url-loader"
			}
		]
	},

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    })
  ]
}
