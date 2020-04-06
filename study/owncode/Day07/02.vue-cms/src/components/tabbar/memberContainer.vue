<template>
  <!-- <div>
    <h1>MemberContainer</h1>
  </div> -->
      <div id="adpp">
      <input type="button" value="加入购物车" @click="flag=!flag">
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      >
        <div class="ball" v-show="flag"></div>
      </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
                    flag:false
    }
  },
  components:{
  },
  methods:{
          beforeEnter(el){
                el.style.transform='translate(0,0)';
              },
              enter(el,done){
                el.offsetWidth
                el.style.transform='translate(150px,450px)'
                el.style.transition='all 15s ease'
                done()
              },
              afterEnter(el){
                //这句话,第一个功能,是控制小球的显示与隐藏
                //第二个功能:直接跳过后半场动画,让flag标识符直接变为false
                //当第二次再点击按钮的时候,flag false -> true
                this.flag=!this.flag
                // el.style.opacity=0.5

                //Vue把一个完整的动画,使用钩子函数,拆分为了两部分:
                //我们使用flag标识符,来表示动画的切换;
                //刚开始flag=false -> true ->false
              }
  },
  created(){
  }
}
</script>

<style>
      .ball{
        width:15px;
        height:15px;
        background-color:red;
        border-radius: 50%;
        z-index: 99999
      }
</style>
