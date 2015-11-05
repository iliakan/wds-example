'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',
  entry:   {
    main: './main'
  },
  output:  {
    path:       __dirname + '/public',
    publicPath: '/',
    filename:   '[name].js'
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      include: __dirname + '/frontend',
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.jade$/,
      loader: "jade"
    }, {
      test:   /\.styl$/,
      loader: 'style!css!stylus?resolve url'
      //loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  },

  // can setup nginx before WDS instead of the proxy
  devServer: {
    proxy: [{
      path:   /^[^.]*$/,
      target: 'http://localhost:3000'
    }],
    host: '127.0.0.1',
    port: 8080
  },

  plugins: [
   // new ExtractTextPlugin('[name].css')
  ]
};



