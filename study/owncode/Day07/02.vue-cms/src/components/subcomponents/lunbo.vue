<template>
  <div class="lunbo-container">
    <mt-swipe>
      <mt-swipe-item
        v-for="item in lunboList"
        :key="item.id"
      >
        <img
          :src="item.img"
          alt=""
          :class="{'full':isFull}"
        />
      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
    }
  },
  props: ["lunboList","isFull"],
  created () {

  },
  methods: {
  }
}
</script>

<style lang="scss">
.mint-swipe {
  height: 200px;
  text-align: center;
  .mint-swipe-item {

    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full{
  width:100%
}
</style>
