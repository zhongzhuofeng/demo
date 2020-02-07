<template>
  <div class="search" >
    <div @click="openSearch">
      <i class="van-icon van-icon-search"></i>
    <span>百岁山</span>
    </div>

    <van-popup :overlay="false"  close-on-popstate  close-icon-position="top-left" position="bottom" v-model="show" :style="{ height: '100%',width:'100%' }">
      <div class="search-form">
       <form action="/">
  <van-search
    v-model="title"
    autofocus
    clearable
    placeholder="请输入搜索关键词"
    show-action
    left-icon="search"
    :action-text="title.length ? '搜索' : '取消'"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      show: false
    }
  },
  methods:{
    openSearch() {
      this.show = true;
    },
    closeSearch() {
      this.show = false;
    },
    onSearch(value) {
      console.log(value)
     this.$emit('searchTitle',value)
      this.closeSearch()    
    },
    onCancel() {
      this.title.length ? this.onSearch() : this.closeSearch()
    }
  }
}
</script>
<style lang="less" scoped>
.search{
  span{
    color: #b0b0b0;
     margin-left: 20px;
  }
  i{
    position: relative;
    left: 10px;
    top: 2px;
  }  
}
</style>