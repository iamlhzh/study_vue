<template>
  <div
    class="mui-numbox"
    data-numbox-min='1'
    data-numbox-max='9'
    style="height:25px"
  >
    <button
      class="mui-btn mui-btn-numbox-minus"
      type="button"
      @click="reduce"
    >-</button>
    <input
      id="test"
      class="mui-input-numbox"
      @change="countChange"
      type="number"
      readonly
      :value="initcount"
      ref="numbox"
    />
    <button
      class="mui-btn mui-btn-numbox-plus"
      type="button"
      @click="add"
    >+</button>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  data () {
    return {
      count: 1
    }
  },
  props: ['initcount', 'goodsid'],
  methods: {
    countChange () {
      var goodInfo = { id: this.goodsid, count: parseInt(this.$refs.numbox.value) };
      this.$store.commit('updateShopCar', goodInfo)
    },
    add () {
      

    },
    reduce () {

    }
  },

  mounted () {
    mui(".mui-numbox").numbox()
  }
}
</script>
<style lang="sass" scoped>

</style>

