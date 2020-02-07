<template>
  <div class="go-back">
   <van-icon name="arrow-left" @click="back" color="white" size="50px"/>
  </div>
</template>
<script>
export default {
  methods:{
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.go-back {
  width: 80px;
  text-align: center;
  i{
    line-height: 100;
  }
}
</style>