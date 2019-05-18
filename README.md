# mukewang
这是模仿慕课网写的vue页面
原链接为https://www.imooc.com/wenda
##项目生产环境打包的时候配置
在package.json中配置
"start": "webpack-dev-server",
"dev": "webpack --mode development",
"build": "webpack --mode production"

在webpack.config.js里面配置
performance: {
  hints:false   
},
performance与plugins同级

命令为npm run build

