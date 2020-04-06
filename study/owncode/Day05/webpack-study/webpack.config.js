const path =require('path')
//启用热更新的第2步
const webpack=require('webpack')
//导入在内存中生成HTML的插件
//只要是插件,都一定要放到plugins节点中去
//这个插件的两个作用:
//1.自动在内存中根据指定页面生成一个内存的页面
//2.自动,把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin=require('html-webpack-plugin')

//这个配置文件,其实就是一个JS文件,通过Node中的模块操作,向外暴露了一个配置对象
module.exports = {
  //需要手动指定 入口 和 出口
  entry: path.join(__dirname, './src/main.js'),//入口,表示,要使用webpack打包哪个文件
  output:{//输出文件相关的配置
    path:path.join(__dirname, './dist'),//指定打包好的文件,输出到哪个目录中去
    filename: 'bundle.js'//这里指定输出的文件的名称
  },
  mode: 'development',// 设置mode
  devServer:{//这是配置dev-server命令参数的第二种形式,相对来说,这种方式麻烦一些
    //--open --port 3000 --contentBase src --hot
    open:true,//自动打开浏览器
    port:3000,//设置启动时候的运行端口
    contentBase:'src',//指定托管的根目录
    hot:true//启用热键的第一步
  },
  plugins:[//配置插件的起点
    new webpack.HotModuleReplacementPlugin(),//new一个热更新的模块对象,这是启用热更新的第3步
    new htmlWebpackPlugin({//创建一个在内存中生成HTML页面的插件
      template:path.join(__dirname,'./src/index.html'),//指定模板页面,将来会根据指定的页面路径,
      //去生成内存中的页面
      filename:'index.html'//指定生成的页面的名称  
    })
  ],
  module:{//这个节点,用来配置所有第三方模块加载器
    rules:[//所有第三方模块的匹配规则
      {test:/\.css$/, use:['style-loader','css-loader']},//配置处理.css文件的第三方loader规则
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理.less文件的第三方loader规则
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理.scss文件的第三方loader规则
    ]

  }

}


//当我们在控制台,直接输入webpack命令执行的时候,webpack做了以下几步:
//1.首先,webpack发现,我们没有通过命令的形式给它指定入口和出口
//2.webpack就回去项目的根目录中,查找一个叫做'webpack.config.js'的配置文件
//3.当找到配置文件后,webpack会去解析执行这个配置文件,当解析执行完配置文件后,就得到了配置文件
//中,导出的配置对象
//4.当webpack拿到配置对象后,指定的入口和出口,然后进行打包构建