<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in tableData" :key="item.id" @click="goDetail(item.id)">
      <img
        :src=item.img_url
        alt=""
      >
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">
            ${{item.sell_price}}
          </span>
          <span class="old">
            ${{item.market_price}}
          </span>
        </p>
        <p class="sell">
          <span>
            热卖中
          </span>
          <span>
            剩{{item.stock_quantity}}件
          </span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageIndex:1,
      tableData:[]
    }
  },
  methods:{
    getGoods(index){
       this.$http.get("api/getgoods?pageindex="+index).then(result => {
         console.log(index);
         console.log(result);
         if(result.body.status===0){
           this.tableData=this.tableData.concat(result.body.message)
         }
         console.log(this.tableData)
    });
    },
    getMore(){
      this.pageIndex++;
      this.getGoods(this.pageIndex);
    },
    goDetail(id){
      //使用js的形式进行路由导航

      //注意:一定要区分this.$route和this.$router这两个对象
      //其中:this.$route是路由[参数对象],所有路由中的参数,params,query都属于它
      //其中:this.$router是一个路由[导航对象],用它可以方便的使用js代码,实现路由的前进
      //后退,跳转到新的url地址
      this.$router.push("/home/goodsinfo/"+id)
    }
  },
  created(){
    this.getGoods(this.pageIndex);
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  button{
    margin-top:5px;
  }
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 304px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
        .old{
          text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>


