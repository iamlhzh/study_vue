
//入口文件
import Vue from 'vue'

//2.1 导入vue-resource
import VueResource from 'vue-resource'

//2.2 安装 vue-resource
Vue.use(VueResource)

Vue.http.options.root='http://www.liulongbin.top:3005/'
//全局设置post时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true