var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var VueloaderPlogin=require('vue-loader/lib/plugin.js')
var webpack=require("webpack")
module.exports = {
performance: {
  hints:false   
},
  plugins: [ 
    new VueloaderPlogin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), 
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
  module: { 
    rules: [ 
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, 
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, 
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  }
}