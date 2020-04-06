<template>
  <div>
    <h1>这是App组件</h1>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodList">GoodList</router-link>
    <mt-button type="primary" @click="getList">按钮</mt-button>
    <button type="button" class="mui-btn mui-btn-danger">
					红色
				</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';

export default{
  data(){
    return{
      toastInstance:null
    };
  },
  methods:{
    getList(){
      this.show();
      setTimeout(() => {
        this.toastInstance.close();
      }, 1000);
    },
    show(){
      this.toastInstance=Toast({
        message:"加载中",
        // iconClass:'icon icon-success',
        duration:-1,
        className:'myclass'
      })

      
    }
  }
};

</script>

<style>
.myclass{
  color:red
}
</style>
