const path = require("path");
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var website = {
  publicPath:"http://localhost:8890/"
}
module.exports={
  mode:'development',
  //入口文件的配置
  entry:{
    main:'./src/main.js',
  },
  output:{
    //打包路径
    path:path.resolve(__dirname,'../dist'),
    //打包的文件名称
    filename:'[name].js',
    publicPath:website.publicPath
  },
  module:{
    rules:[
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          //提取.vue文件中的style到css/index.js中
          extractCSS:true
        }
      },
        //css loader
      {
        test:/\.css$/,
        use:extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
        test:/\.(png|jpg|gif|jpeg)/,
        use:[{
          loader:'url-loader',
          options:{
            limit:500
          }
        }]
      }
    ]
  },
  plugins:[
      new uglify(),
      new htmlPlugin({
        minify:{//对html文件进行压缩
          removeAttributeQuotes:true //去掉属性的双引号
        },
        hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存js
        template:'./src/index.html'
      }),
      new extractTextPlugin("css/index.css"),
      new VueLoaderPlugin()
  ],
  devServer:{
    //设置基本目录结构
    contentBase:path.resolve(__dirname,'../dist'),
    //服务期的ip地址
    host:'localhost',
    //服务端压缩是否开启
    compress:true,
    port:8890
  }
}