<template>
  <div>
   <div class="search-header">
     <go-back />
     <search @searchTitle="obtainValue"/>
     <arrangement />
   </div>
   <template v-if="list.length">
   <van-row v-for="item in list" :key="item.id" type="flex" gutter="30" class="goods-list">
  <van-col span="12" class="goods-image"><img :src="item.img_url" alt=""></van-col>
  <van-col span="11"><h3>{{item.title | Intercept(45)}}</h3>
          <p>原价：{{item.sell_price}}</p>
          <p>现价：{{item.sell_price}}</p>
          <p>剩余：{{item.stock_quantity}}</p></van-col>
</van-row>
</template>
<template v-if="!list.length">暂无内容</template>
  </div>
</template>
<script>
const search = () => import('@/components/Search')
const goBack = () => import('@/components/goBack')
const arrangement = () => import('@/components/arrangement')
import {getShopList} from '@/http/swiper.js'

export default {
  components:{search,goBack,arrangement},
  data() {
    return {
      params: {
        title: '',
        pageSize: 10,
        currentPage: 1
      },
      list: []
    }
  },
  methods:{
    query() {
      getShopList(this.params)
      .then(res=>{
        this.list = res
      })
      .catch(err => {throw new Error(err)})
    },
    obtainValue(value) {
      this.params.title = value;
      console.log('执行了')
      this.query()
    }
  },
  mounted() {
    console.log(this.$route.params.title)
    this.params.title=this.$route.params.title
    this.query()
  },
}
</script>
<style lang="less" scoped>
.goods-image{
  img{
    width: 100%;
  }
}
.goods-list{
  margin-top: 10px;
}
</style>