<template>
  <div id="app">

    <Header />

  </div>

</template>


<script>
import Header from './components/Header.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import SiteHeader from './components/Site-header.vue'
import HomeSub from './components/HomeSub.vue'
import HomeMain from './components/HomeMain.vue'
export default {
  name: 'App',
  components: {
    HomeSwiper,
    Header,
    SiteHeader,
    HomeSub,
    HomeMain
  },

}
</script >

<style lang="less" scoped>
</style>
