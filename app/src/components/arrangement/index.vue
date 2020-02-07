<template>
  <div class="arrangement-mode">
   <van-icon  :name="isShow?'apps-o':'qr-invalid'" @click="arrayMode" color="white" size="60px"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
       isShow:true
    }
  },
  methods:{
    arrayMode() {
     console.log('111')
    }
  }
}
</script>
<style lang="less" scoped>
.arrangement-mode {
  width: 80px;
  text-align: center;
  i{
    line-height: 100;
  }
}
</style>