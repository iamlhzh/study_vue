<template>
  <div>
    <h1>这是Account组件</h1>
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
//普通的style标签只支持普通的样式,如果想要启用scss或less,需要为styleyuansu
//设置lang属性
//只要咱们的style标签,是在.vue组件中定义的,那么,推荐都为style开启scoped属性

body{
  div{
    font-style:italic;
  }
}
</style>
