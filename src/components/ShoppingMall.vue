<template>
  <div class="shopping-mall-wrapper">
    <Header />
    <SiteHeader />
    <div class="site-category-wrapper">
      <div class="site-category">
        <ul>
          <li v-for="(category ,index) in categoryItem" :key="index">
            <CategoryItem :category="category" :categoryIndex="index" />
          </li>
        </ul>
      </div>
    </div>
    <HomeSwiper />
    <HomeSub />
    <HomeMain />

  </div>
</template>

<script>
import Header from './Header.vue'
import SiteHeader from './SiteHeader.vue'
import CategoryItem from './CategoryItem.vue'
import HomeSwiper from './HomeSwiper.vue'
import HomeSub from './HomeSub.vue'
import HomeMain from './HomeMain.vue'
export default {
  name: 'ShoppingMall',
  components: {
    Header,
    SiteHeader,
    HomeSwiper,
    HomeSub,
    HomeMain,
    CategoryItem
  },
  data () {
    return {
      categoryItem: ["手机", "电视", "笔记本 平板", "家电", "出行 穿戴", "智能 路由器", "电源 配件", "健康 儿童", "耳机 音箱", "生活 箱包"],
    }
  },
}
</script>

<style lang="less" scoped>
.site-category-wrapper {
  position: relative;
  width: 1228px;
  margin: 0 auto;
  .site-category {
    position: absolute;
    left: 0;
    width: 234px;
    height: 460px;
    background: rgba(105, 101, 101, 0.6);
    z-index: 99;
    li:first-of-type {
      margin-top: 20px;
    }
    li:last-of-type {
      margin-bottom: 20px;
    }
  }
}
</style>