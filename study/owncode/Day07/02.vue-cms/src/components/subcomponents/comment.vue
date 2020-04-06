<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" v-model="msg" maxlength="120" placeholder="请输入评论内容"></textarea>
    <mt-button type="primary" size="large" @click="sendComments()">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item ,i ) in comments" :key="item.i">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">
          {{item.content}}
        </div>
      </div>
    </div>



    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      pageIndex:1,
      comments:[],
      msg:''
    }
  },
  props:["id"],
    created(){
      setTimeout(()=>{    this.getComments();},100)

  },
  methods:{
    sendComments(){
      if(this.msg.trim().length===0){
       return  Toast('评论不能为空') 
      }
      let paramObj={content:this.msg}
      this.$http.post("api/postComment/"+this.id,paramObj)
      .then(result=>{
        console.log(result.body)
        if(result.body.status===0){
          Toast(result.body.message)
          var comment={'add_time':new Date(),'content':this.msg,'user_name':'卢宏政'}
      this.comments.unshift(comment);
      this.msg=''
        }
      })
      var comment={'add_time':new Date(),'content':this.msg,'user_name':'卢宏政'}
      this.comments.unshift(comment);
      this.msg=''
    },
    getComments(){
      console.log(1111)
       console.log(this.id)
      this.$http.get("api/getComments/"+this.id+"?pageindex="+this.pageIndex)
      .then(result=>{
        console.log(result.body)
        if(result.body.status===0){
          this.comments=this.comments.concat(result.body.message)
        }
      })
    },
    getMore(){
      this.pageIndex++;
      this.getComments();
      // this.$http.get("api/getComments/"+this.id+"?pageindex="+this.pageIndex)
      // .then(result=>{
      //   console.log(result.body)
      //   if(result.body.status===0){
      //     this.comments.push(result.body.message)
      //   }
      // })
    }
  }
}
</script>

<style>
.cmt-container h3{
 font-size: 18px;
}
.cmt-container textarea{
 font-size: 14px;
 height: 85px;
 margin:0
}
.cmt-container .cmt-list{
  margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item{
 font-size: 13px;
}
.cmt-container .cmt-list .cmt-item .cmt-title{
line-height: 30px;
background-color: #ccc
}

.cmt-container .cmt-list .cmt-item .cmt-body{
line-height: 35px;
text-indent: 2em;
}

</style>
