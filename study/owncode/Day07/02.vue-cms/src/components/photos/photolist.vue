<template>
  <div>
    <div
      id="slider"
      class="mui-slider"
    >
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id===0?'mui-active':'']"
            @click="getImageList(item.id)"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in titleList"
            :key="item.id"
          >
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <ul class="photo-list">
      <router-link
        v-for="item in imageList"
        :key="item.id"
        :to="'/home/photoinfo/'+item.id"
        tag="li"
      >
        <img v-lazy="item.img_url" >
        <div class="info">
          <div class="info-title">
            {{item.title}}
          </div>
          <div class="info-body">
            {{item.zhaiyao}}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//1.导入mui的js
import mui from '../../lib/mui/js/mui.js'

export default {
  data () {
    return {
      titleList: [],
      imageList: []
    }
  },
  mounted () {
    //当组件中的DOM结构被渲染好并放到页面中后,会执行这个钩子函数
    //如果要操作元素,最好在mounted里面,因为,这里时候的DOM元素是最新的
    //2.初始化滑动
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory () {
      //获取所有的图片分类
      this.$http.get("api/getimgcategory").then(result => {
        console.log(result)
        if (result.body.status === 0) {
          this.titleList = result.body.message;
          this.titleList.unshift({ title: "全部", id: 0 })
        }
      })
    },
    getImageList (id) {
      this.$http.get("api/getimages/" + id).then(result => {
        console.log(result)
        if (result.body.status === 0) {
          this.imageList = result.body.message;
        }
      })
    }
  },
  created () {
    this.getAllCategory();
    this.getImageList(0);
  }
}
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999 ;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>

