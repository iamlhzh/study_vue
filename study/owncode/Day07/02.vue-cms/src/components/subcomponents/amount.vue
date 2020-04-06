<template>
  <div class="cmt-container1">

    <h3>{{$store.getters.getCount}}</h3>

  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
  }
}
</script>

<style>
.cmt-container h3 {
  font-size: 18px;
}
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-container .cmt-list {
  margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item {
  font-size: 13px;
}
.cmt-container .cmt-list .cmt-item .cmt-title {
  line-height: 30px;
  background-color: #ccc;
}

.cmt-container .cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
