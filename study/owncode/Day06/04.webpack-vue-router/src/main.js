import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'

//2.手动安装VueRouter
Vue.use(VueRouter)

//导入app组件
import app from './App.vue'

//导入路由
import router from './router'




var vm = new Vue({
  el:'#app',
  render:c=>c(app),//render会把el指定的容器中,所有的内容都清空覆盖,所以不要把路由
  //的router-view和router-link直接写到el所控制的元素中
  router//4.将路由对象挂载到vm上
})

//注意:App这个组件,是通过VM实例的render函数,渲染出来的,render函数如果要渲染组件,渲染出来的组件,只能放到
//el:'#app'所指定的元素中;
//Account和GoodList组件,是通过路由匹配监听到的,所以,这两个组件,只能展示到属于路由的<router-view></router-view>中去;