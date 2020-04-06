import VueRouter from 'vue-router'



//导入Account组件
import account from './main/Account.vue'
import goodList from './main/GoodList.vue'
//导入Account的子组件
import login from './main/subcom/login.vue'
import register from './main/subcom/register.vue'

//3.创建路由对象
var router =new VueRouter({
  routes:[
    {
      path:'/account',component:account,
      children:[
        {path:'/login',component:login},
        {path:'/register',component:register}
      ]
  },
    {path:'/goodList',component:goodList}
  ]
})


export default router