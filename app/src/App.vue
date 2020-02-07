<template>
  <div id="app">
    <router-view></router-view>
   <navigation />
  </div>
</template>

<script>
import navigation from '@/components/navigation'
export default {
  name: 'App',
  components:{navigation}
}
</script>
<style lang="less" scoped>
#app {
  font-size: 16px !important;
}
</style>
