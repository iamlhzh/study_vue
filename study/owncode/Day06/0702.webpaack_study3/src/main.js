//项目的JS入口文件
console.log('ok')

import './css/index.css'
import './css/index.scss'
//注意:如果要通过路径形式,去引入node_modules中相关的文件,可以直接省略,路径前面的node_modules
//这一层目录,直接写包的名称,然后后面跟上具体的文件路径
//不写node_modules这一层目录,默认就会去node_modules中查找
import 'bootstrap/dist/css/bootstrap.css'

// class关键字,是ES6中提供的新语法,是用来实现ES6中面向对象编程的方式
class Person{
  //使用static关键字可以定义静态属性
  //所谓的静态属性,就是可以直接通过类名,直接访问的属性
  //实例属性:只能通过类的实例来访问的属性,叫做实例属性
  static info ={ name:'zs',age:20}
}

//访问Person类身上的info静态属性
console.log(Person.info)
//在webpack中,默认只能处理一部分ES6的新语法,一些更高级的ES6语法或者ES7语法
//webpack处理不了的,这时候,就需要借助于第三方的loader,来帮助webpack处理这些高级的语法
//当第三方loader把高级语法转换为低级语法之后,会把结果交给webpack去打包到bundle.js中

//通过Babel,可以帮我们将高级的语法转换为低级语法
//1.在webpack中,可以运行,如下两套命令,安装两套包,去安装Babel相关的loader功能;
//1.1 第一套包:cnpm i babel-core babel-loader@7 babel-plugin-transform-runtime -D
//1.2 第二套包:cnpm i babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置文件,在module节点下的rules数组中,添加一个新的匹配规则:
//2.1{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//2.2注意:在配置babel的loader规则的时候,必须把node_modules目录,通过exclude选项排除掉
//原因有俩:
//2.2.1如果不排除node_modules,则Babel会把node_modules中所有的第三方JS文件都打包编译,这样
//会非常消耗CPU,同时,打包速度会非常慢
//2.2.2哪怕,最终,Babel把所有node_modules中的JS转换完毕了,但是,项目也无法正常运行!
//3.在项目的根目录中,新建一个叫做.babelrc的Babel配置文件,这个配置文件,属于JSON格式
//所以,在写.babelrc配置的时候,必须符合JSON语法规范:不能写注释,字符串必须用双引号
//3.1在.babelrc写如下的配置:
// {
//   "presets":["env","stage-0"],
//   "plugins":["transform-runtime"]
// } 
//4.了解:目前我们安装的babel-preset-env,是比较新的ES语法,之前,我们安装的是babel-preset-es2015.现在
//出了一个更新的语法插件,叫做babel-preset-env,它包含了所有的和es***相关的语法

//Java C#实现面向对象的方式完全一样了,class是从后端语言中借鉴过来的,来实现面向对象
// var p1=new Person()


// function Animal(name){
//   this.name=name
// }

// var al=new Animal('小花')

// //这是静态属性
// console.log(Animal.info)
// //这是实例属性
// console.log(al.name)