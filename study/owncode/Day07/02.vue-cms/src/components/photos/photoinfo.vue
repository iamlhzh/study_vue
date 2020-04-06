<template>
<div class="photoinfo-container">

  <h3>{{photoinfo.title}}</h3>
  <p class="subtitle">
    <span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
    <span>点击:{{photoinfo.click}}次</span>
  </p>
  <hr>
  <!-- 缩略图区域 -->
<vue-preview :slides="slide1" @close="handleClose"></vue-preview>

  <!-- 图片内容区域 -->
  <div class="content" v-html="photoinfo.content">
  </div>

  <!-- 放置评论子组件 -->
  <comment :id="id"></comment>
</div>
  
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      photoinfo:{},
      slide1: []
    };
  },
  components:{
    comment:comment
  },
  methods:{
    getPhotoInfo(){
      this.$http.get("api/getimageInfo/"+this.id).then(result=>{
        console.log(result)
        if(result.body.status===0){
          this.photoinfo=result.body.message[0];
        }
      })
    },
    getThumbs(){
       this.$http.get("api/getthumimages/"+this.id).then(result=>{
         console.log(result)
         var list=result.body.message;
        //  var arr=[];
        //  for(var i=0;i<list.length;i++){
        //    var img={};
        //    img.src=list[i].src;
        //    img.msrc=list[i].src;
        //    img.alt='picture'+i;
        //    img.title='Image Caption '+i;
        //    img.h=600;
        //    img.w=400;
        //    arr.push(img);
        //  }
         list.forEach((item,i)=>{
           item.src=item.src;
           item.msrc=item.src;
           item.alt='picture'+i;
           item.title='Image Caption '+i;
           item.h=600;
           item.w=400;
         })
          this.slide1=list;
       });
    },
    handleClose(){

    }
  },
  created(){
    console.log(this.id)
    this.getPhotoInfo();
    this.getThumbs();
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
  padding: 3px;
  h3{
    color: blue;
    font-size: 15px;
    text-align: center;
    margin:15px 0;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
}
</style>

