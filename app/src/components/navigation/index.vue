<template>
  <div class="bottom-nav">
    <div v-for="item in list" :key="item._id" class="each-nav">
        <i class="icon iconfont" :class="item.icon"></i>
        <router-link :to="{path:item.path}">{{item.name}}</router-link>
    </div>
  </div>
</template>
<script>
import {getRouters} from '@/http/swiper'
export default {
  data(){
    return {
      list: []
    }
  },
  methods:{
    query(){
      getRouters()
      .then(res=>{
        this.list = res;
      })
    }
  },
  mounted() {
    this.query()
  },
}
</script>
<style lang="less" scoped>
.bottom-nav{
  position: fixed;
  bottom: 0;
  height: 60px;
  background: red;
  width: 100%;
  display: flex;
  color: white;
 align-items: center;
  .each-nav{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  i{
    font-size: 28px;
    text-align: center;
  }
  a{
    color: white;
  }
}
</style>