<template>
  <div class="home-swiper-wrapper">
    <div class="home-swiper">
      <a href="#" class="swiper-wrapper" v-for="item in swiperWrapperUrl" :key="item.id">
        <transition :appear=true name="swiperWrapper">
          <img :src='item.url' v-show="item.flag" :id='item.id' @mouseenter="enter"
               @mouseleave="leave">
        </transition>
      </a>
      <button class="prev" @click.passive="prev"></button>
      <button class="next" @click="next"></button>
      <div class="circle">
        <ul>
          <a href="#">
            <li v-for='item in swiperWrapperUrl' :key='item.id' @click="clickCircle(item.id)"
                :class="{'current-circle':item.flag}"></li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {

      flag: true,
      currentWarperId: 0,
      // 定时器
      timer: null,
      swiperWrapperUrl: [
        { id: 1, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/01a5d7313fe344bddb9e4081df4dc998.jpg?w=2452&h=920', flag: true },
        { id: 2, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67c7222fbcf98db942718eaf29f32297.jpg?thumb=1&w=1226&h=460&f=webp&q=90', flag: false },
        { id: 3, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=1226&h=460&f=webp&q=90', flag: false },
        { id: 4, url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1226&h=460&f=webp&q=90', flag: false },

      ]
    }
  },

  mounted () {
    // 页面加载自动播放
    this.automaticPlay()
  },
  methods: {
    clickCircle (id) {
      this.enter()
      this.currentWarperId = id
      for (let i = 0; i < this.swiperWrapperUrl.length; i++) {
        this.swiperWrapperUrl[i].flag = false
      }
      this.swiperWrapperUrl[id - 1].flag = true
      this.automaticPlay()
    },

    // 鼠标进入暂停自动播放
    enter () {
      clearInterval(this.timer)
    },
    //鼠标离开继续播放
    leave () {
      this.automaticPlay()
    },
    //自动播放部分
    automaticPlay () {
      this.timer = setInterval(() => {
        this.next()
      }, 4000)
    },
    //上一个
    prev () {
      clearInterval(this.timer)
      if (this.currentWarperId == 0) {
        this.currentWarperId = this.swiperWrapperUrl.length - 1
      }
      for (let i = 0; i < this.swiperWrapperUrl.length; i++) {
        this.swiperWrapperUrl[i].flag = false
      }
      this.swiperWrapperUrl[this.currentWarperId].flag = true
      this.currentWarperId--
      this.automaticPlay()
    },
    //下一个
    next () {
      clearInterval(this.timer)
      if (this.currentWarperId == this.swiperWrapperUrl.length) {
        this.currentWarperId = 0
      }
      for (let i = 0; i < this.swiperWrapperUrl.length; i++) {
        this.swiperWrapperUrl[i].flag = false
      }
      this.swiperWrapperUrl[this.currentWarperId].flag = true
      this.currentWarperId++
      this.automaticPlay()
    }
  },
}
</script>

<style lang="less" scoped>
.home-swiper-wrapper {
  width: 1228px;

  margin: 0 auto;
  .home-swiper {
    position: relative;
    height: 460px;
    width: 100%;
    .prev {
      position: absolute;
      left: 234px;
      top: 50%;
      height: 80px;
      opacity: 50%;
      transform: translate(0, -50%);
      font-size: 40px;
      font-family: 'icomoon';
      &:hover {
        background-color: rgba(116, 116, 116, 0.5);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .next {
      position: absolute;
      right: 0;
      top: 50%;
      height: 80px;
      opacity: 50%;
      transform: translate(0, -50%);
      font-size: 40px;
      font-family: 'icomoon';
      &:hover {
        background-color: rgba(116, 116, 116, 0.5);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }
    .swiper-wrapper {
      position: absolute;
    }
    .swiperWrapper-enter,
    .swiperWrapper-leave-to {
      opacity: 0;
    }
    .swiperWrapper-leave,
    .swiperWrapper-enter-to {
      opacity: 100%;
    }
    img {
      width: 1228px;
      height: 460px;
      transition: all 1s;
    }
    .circle {
      position: absolute;
      right: 30px;
      bottom: 20px;
      .current-circle {
        background: rgba(255, 255, 255, 0.4);
      }
      li {
        float: left;
        margin-right: 4px;
        width: 6px;
        height: 6px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.4);
        &:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
}
</style>