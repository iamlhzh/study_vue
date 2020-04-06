//专门定义过滤器的
import Vue from'vue'

//导入格式化时间插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})