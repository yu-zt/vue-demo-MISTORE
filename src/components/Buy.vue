<template>
  <div class="buy-wrapper">
    <Header />

    <Site-header />
    <div class="line"></div>
    <div class="goods-wrapper">
      11111111111111
      <h3>买买买: 商品id是<span>{{$route.query.id}}</span> </h3>
      <h3>根据id向后台获取商品详细信息 </h3>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import SiteHeader from './SiteHeader.vue'
export default {
  name: 'Buy',
  components: {
    Header,
    SiteHeader,
  },
  data () {
    return {
      //此处数据有些需要后台获取 
      goodsDetail: { title: 'Xiaomi Sound', price: 499 }
    }
  },
  mounted () {
    console.log(this.$route)
  },
}
</script>

<style lang="less" scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
}
.goods-wrapper {
  width: 1228px;
  margin: 0 auto;
  h3 {
    margin-bottom: 10px;
  }
  span {
    color: red;
  }
}
</style>