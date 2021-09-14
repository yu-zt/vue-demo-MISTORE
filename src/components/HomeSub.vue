<template>
  <div class="home-sub">
    <div class="home-channel-list">
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
             alt="">
        <span>保障服务</span>
      </a>
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
             alt="">
        <span>企业团购</span>
      </a>
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
             alt="">
        <span>F码通道</span>
      </a>
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
             alt="">
        <span>米粉卡</span>
      </a>
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
             alt="">
        <span>以旧换新</span>
      </a>
      <a href="#" class="home-channel-list-item">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
             alt="">
        <span>话费充值</span>
      </a>
    </div>
    <div v-for="(item,index) in homePromoSize.data" :key="index" class="home-promo-list">
      <HomePromoList :homePromoSize="homePromoSize" :data="item" />
    </div>
  </div>
</template>

<script>
import HomePromoList from './HomePromoList.vue'

export default {
  name: 'HomeSub',
  components: { HomePromoList },
  data () {
    return {
      homePromoSize: {
        w: 316, h: 170, data: [
          { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8a6d6d37904e22c72130e3e4ec79b41.jpg?w=632&h=340', link: '#' },
          { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b30177d629bfbe2fb42251c1b8538f7b.jpg?w=632&h=340', link: '#' },
          { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f18ac756fa2cedb16ea429b9c0001af.png?w=632&h=340', link: '#' }
        ]
      }
    }
  },
}
</script>

<style lang="less" scoped>
.home-sub {
  width: 1228px;
  margin: 0 auto;
  margin-top: 15px;
  height: 170px;

  .home-channel-list {
    display: flex;
    flex-wrap: wrap;
    float: left;
    width: 234px;
    height: 170px;
    background: #5f5750;

    .home-channel-list-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 78px;
      height: 85px;
      color: white;
      font-size: 12px;
      &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 64px;
        height: 1px;
        background: #665e57;
      }
      &::after {
        content: '';
        position: absolute;
        top: 9px;
        left: 0;
        width: 1px;
        height: 70px;
        background: #665e57;
      }
      img {
        width: 24px;
        margin-bottom: 5px;
      }
    }
  }
  .home-promo-list {
    float: left;
    margin-left: 15px;
  }
}
</style>