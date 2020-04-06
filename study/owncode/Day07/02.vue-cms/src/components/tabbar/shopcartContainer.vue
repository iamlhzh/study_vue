<template>
  <div class="shopcarContainer">
    <div class="goodsList" >
      <div class="mui-card" v-for="(item,i) in goodList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getSelectedState[item.id]" @change="updateSelectedState(item.id,$store.getters.getSelectedState[item.id])"></mt-switch>
            <img
              :src="item.thumb_path"
              alt=""
            >
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">¥{{item.sell_price}}</span>
                <numberbox :initcount="$store.getters.getSelectedCount[item.id]" :goodsid="item.id"></numberbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class="red">{{$store.getters.getSelectedCountAndAmount.count}}</span> 件,总价 <span class="red">¥{{$store.getters.getSelectedCountAndAmount.amount}}</span> </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numberbox from '../../components/subcomponents/shopcar_numberbox.vue'
export default {
  components: {
    numberbox
  },
  data () {
    return {
      goodList:[]
    }
  },
  methods: {
    remove(id,i){
      this.goodList.splice(i,1);
      this.removeShopCar(id);

    },
    removeShopCar(id){
      this.$store.commit('removeShopCar', id)
    },
    getGoodsList () {
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length !== 0) {
        this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(result => {
          console.log(result);
          if(result.body.status===0){
            this.goodList=result.body.message;
          }
        })
      }
    },
    updateSelectedState(id,selectedState){
      var goodInfo={id:id,selected:selectedState}
      this.$store.commit('updateSelectedState',goodInfo)
      console.log(id,selectedState)
    }
  },
  created () {
    this.getGoodsList();
  }
}
</script>

<style lang="scss" scoped>
.shopcarContainer {
  background-color: #eee;
  overflow: hidden;
  .goodsList {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color:red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
