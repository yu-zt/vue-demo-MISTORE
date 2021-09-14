<template>
  <div>
    <Site-header />
    <HomeSwiper />
    <HomeSub />
    <HomeMain />
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue'
import SiteHeader from './Site-header.vue'
import HomeSub from './HomeSub.vue'
import HomeMain from './HomeMain.vue'
export default {
  name: 'ShoppingMall',
  components: {
    HomeSwiper,
    SiteHeader,
    HomeSub,
    HomeMain
  },
}
</script>

<style lang="less" scoped>
</style>