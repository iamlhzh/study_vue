<template>
  <div class="content_container">
    <h1>{{info.title}}</h1>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:'',
      info:{}
    }
  },
  methods:{
    getGoodDesc(){
      this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
        console.log(result)
        // if(result.body.status===0){
        //   this.goodsInfo=result.body.message[0]
        // }
        if(result.body.status===0){
          this.info=result.body.message[0]
        }
      })
    }
  },
  created(){
    this.id=this.$route.params.id;
    this.getGoodDesc();
  }
}
</script>
<style lang="scss" >
  .content_container{
    padding: 4px;
    h1{
      font-size: 16px;
      color:blue;
      text-align: center;
      margin:15px 0;
    }
    .content{
      img{
        width: 100%
      }
    }
  }
</style>
