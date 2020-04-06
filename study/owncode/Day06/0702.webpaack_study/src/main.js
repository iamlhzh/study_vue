//如何在webpack构建的项目中,使用Vue进行开发


//复习 在普通网页中如何使用vue
//1.使用script标签,引入vue的包
//2.在index页面中,创建一个id为app div容器
//3.通过new Vue得到一个vm的实例


//在webpack中尝试使用Vue:
//注意:在webpack中,使用import Vue from 'vue'导入的Vue构造函数,功能不完整,只提供
//了runtime-only的方式,并没有提供像网页中那样的使用方式;
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
//回顾包的查找规则
//1.找项目根目录中有没有node_modules的文件夹
//2.在node_modules中根据包名,找对应的vue文件夹
//3.在vue文件夹中,找一个叫做package.json的包配置文件
//4.在package.json文件中,查找一个main属性[main属性指定了这个包在被加载时候的入口文件]

// var login={
//   template:'<h1>这是login组件,是使用网页中形式创建出来的组件</h1>'
// }

//1.导入login组件
import login from './login.vue'
//默认webpack无法打包.vue文件,需要安装相关的loader
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中,新增loader配置项 {test:/\.vue$/,use:'vue-loader'}

var vm=new Vue({
  el:'#app',
  data:{
    msg:'123'
  },
  // components:{
  //   login
  // }
  // render:function(createElements){//在webpack中,如果想要通过Vue,把一个组件放到页面中去展示
  //   //vm实例中的render函数可以实现
  //   return createElements(login)
  // }
  render:c=> c(login)
})


//总结梳理:webpack中如何使用vue:
//1.安装vue的包:cnpm i vue -S
//2.由于在webpack中,推荐使用.vue这个组件模板文件定义组件,所以,需要安装能够解析
//这种文件的loader cnpm i vue-loader vue-template-compiler -D
//3.在main.js中导入Vue模块 import Vue from 'vue'
//4.定义一个.vue结尾的组件,其中,组件有三个部分template script style
//5.使用import login from './login.vue'导入这个组件
//6.创建vm实例var vm=new Vue({el:'#app',render:c=>c(login)})
//7.在页面中创建一个id为app的div元素,作为我们vm实例要控制的区域


import m22,{tittle as tittle222,content} from './test.js'

console.log(m22)
console.log(tittle222+'----'+content)