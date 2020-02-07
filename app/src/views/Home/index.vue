<template>
  <div>
   <div class="search-header">
     <div class="saoyisao">
        <input type="file" style="display:node" id="myFileUpload" capture="capture" multiple="multiplt" accept="image/*" @change="onUpload($event)">
        <i class="van-icon van-icon-scan" @click="selectFile"></i>
     </div>
    <Search @searchTitle="obtainValue"/>
    <div class="flower">
      <i class="van-icon van-icon-flower-o"></i>
    </div>
   </div>
   <div>
     <van-swipe :autoplay="3000"  indicator-color="#1989fa" class="swiper-home">
  <van-swipe-item  v-for="item in list" :key="item.id">
    <a :href="item.url">
      <img :src="item.src" alt="" lazy-load>
    </a>
  </van-swipe-item>
</van-swipe>
   </div>
<div>
<!-- <div v-for="item in image" :key="item.name">
  <img :src="item.data" style="width:100%"/>
  <h5>{{item.name}}</h5>
</div> -->
<div v-for="item in imageList" :key="item.name">
  <img :src="item.src" style="width:100%"/>
  111
  <!-- <h5>{{item.name}}</h5> -->
</div>
</div>
  </div>
</template>
<script>
import Search from '@/components/Search'
import { getSwiper,postFilesImage } from "../../http/swiper";
export default {
  components:{
    Search
  },
  data() {
    return {
      list: [],
      image: [],
      imageList: []
    };
  },
  methods:{
query(){
  getSwiper().then(res => {
      this.list = res
    })
},
    obtainValue(value) {
      this.$router.push({
        name:'goodsList',
        params:{
           title:value
        }
      })
    },
    selectFile() {
      document.querySelector('#myFileUpload').click()
    },
    onUpload(e) {
      this.image=[]
      let files = e.target.files[0]
      let name = files.name
      console.log(files)
      let reader = new FileReader();
      reader.readAsDataURL(files)
      reader.onload = (e)=>{
        this.image.push({data:e.target.result,name})
      }
      let formData = new FormData()
      formData.append('file',files)
      postFilesImage(formData)
      .then(res=>{
        console.log(res)
        this.imageList = res
      })
      e.srcElement.value = ""//及时清空
    }
  },
  mounted() {
    this.query()
  }
};
</script>
<style lang="less" scoped>
.swiper-home{
  height: 250px;
  width:100%;
  a{
    overflow: hidden;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
.search-header{
  .saoyisao,.flower{
    width: 60px;
    text-align: center;
    &::before,i::before{
      font-size: 24px;
      color: white;
    }
  }
  .saoyisao{
    input{
      width: 100%;
      height: 100%;
      display: none;
    }
  }
}
</style>
