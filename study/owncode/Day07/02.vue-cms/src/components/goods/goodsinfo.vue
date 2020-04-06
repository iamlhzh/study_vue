<template>
  <div class="goods-info">
    <transition 
    @before-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter">
      <div class="ball" id="ball" v-show="ballFlag"></div>
    </transition>
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<lunbo :lunboList="lunboList" :isFull="false"></lunbo>
					</div>
				</div>
			</div>
      <div class="mui-card">
				<div class="mui-card-header">{{goodsInfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价: <del>¥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;<span class="now_price">
                ¥{{goodsInfo.sell_price}}
              </span>
            </p>
            <p>购买数量:<numberbox @updateData="getSeclectedCount"></numberbox>
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
            </p>
					</div>
				</div>
      </div>
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{goodsInfo.goods_no}}</p>
            <p>库存情况:{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间:{{goodsInfo.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>

        </div>
			</div>
  </div>
</template>
<script>
import lunbo from '../subcomponents/lunbo.vue'
import numberbox from '../subcomponents/goodsinfo_numberbox.vue'

export default {
  data () {
    return {
      id:this.$route.params.id,
      lunboList:[],
      goodsInfo:{},
      ballFlag:false,
      count:1
    }
  },
  components:{
    lunbo:lunbo,
    numberbox:numberbox
  },
  methods:{
    getSeclectedCount(num){
      this.count=num
      console.log(num)
    },
    addToShopCar(){
      this.ballFlag=!this.ballFlag;
      console.log(this.ballFlag)
      var goodInfo={id:this.goodsInfo.id,count:this.count,selected:true,price:this.goodsInfo.sell_price};
      console.log(goodInfo)
      this.$store.commit('addToShopCar',goodInfo)
    },
    goDesc(id){
      this.$router.push("/home/goodsdesc/"+id)
    },
    goComment(id){
      this.$router.push("/home/goodscomment/"+id)
    },
    getGoodsInfo(id){
      this.$http.get("api/goods/getinfo/"+this.id).then(result=>{
        console.log(result)
        if(result.body.status===0){
          this.goodsInfo=result.body.message[0]
        }
      })
    },
     getLunbo(){
       this.$http.get("api/getthumimages/"+this.id).then(result=>{
         console.log(result)
        if(result.body.status===0){
          var list=result.body.message;
          list.forEach((item,i)=>{
            item.img=item.src;
            item.id=i
          })
          this.lunboList=list;
        }
       });
      //  console.log(this.lunboList)
    },
    beforeEnter(el){
      console.log(1)
      console.log(el)
      el.style.transform="translate(0,0)";
    },
    enter(el,done){
      var ele=document.getElementById('badge').getBoundingClientRect();
      var ele2=document.getElementById('ball').getBoundingClientRect();
      var x=ele.left-ele2.left;
      var y=ele.top-ele2.top;
      console.log(x)
      console.log(y)
      console.log(2)
      console.log(el)
      el.offsetWidth;
      el.style.transform=`translate(${x}px,${y}px)`;
      el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el){
      console.log(3)
      console.log(el)
      this.ballFlag=!this.ballFlag
      console.log(this.ballFlag)
    }
  },
  created(){
    this.getLunbo();
    this.getGoodsInfo(this.id);
  }
}
</script>

<style lang="scss" scoped>
.goods-info{
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold
  }
  .mui-card-footer{
    display:block;
    button{
      margin: 10px;
    }
  }
  .ball{
    width:15px;
    height:15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 999999;
    top:407px;
    left:138px;
  }
}
</style>


