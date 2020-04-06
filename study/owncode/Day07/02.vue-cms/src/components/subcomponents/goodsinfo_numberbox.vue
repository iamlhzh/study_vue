<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="remove">-</button>
					<input id="test" class="mui-input-numbox" @change="countChange" type="number" v-model="count" value="1" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
				</div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {
  data(){
    return{
      count:1
    }
  },
  methods:{
    countChange(){
    },
    add(){
      this.count++;
      this.$emit('updateData',this.count)
    },
    remove(){
this.count--;
      this.$emit('updateData',this.count)
    }
  },

  mounted(){
    mui(".mui-numbox").numbox()
  }
}
</script>
<style lang="sass" scoped>

</style>

