<template>
  <div class="home-brick-box-wrapper">
    <div class="home-brick-box">
      <div class="box-hd">
        <span class="title">{{goods.title}}</span>

        <a class="more" href="#">{{goods.more[0]}}<span>{{goods.more[1]}}</span></a>

      </div>
      <div class="brick-item-wrapper clearfix">
        <div class="brick-promo-item-big " @mouseenter="flag=true"
             :class="{'brick-promo-item-big-mouseEnter':flag}" @mouseleave="flag=false">
          <a :href="bigBox.link">
            <img :src="bigBox.src" alt="">
          </a>
        </div>

        <a :href="goods.link" v-for="(goods,index) in goodsList" :key="index"
           :class="{currentMouseEnter:current==index,'brick-item':current!=index}"
           @mouseenter="brickMouseenter(index)" @mouseleave="brickMouseleave">
          <BrickItem :goods="goods" />
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import BrickItem from './BrickItem.vue'
export default {
  components: { BrickItem },
  name: 'HomeBrickBox',
  props: ['goods', 'goodsList', 'bigBox'],
  data () {
    return {
      flag: false,
      //判断当前index值使用
      current: 99,
    }
  },
  methods: {
    brickMouseenter (index) {
      //鼠标进入,让index等于current值,  触发新的类实施
      this.current = index
    },
    brickMouseleave () {
      //鼠标离开时,让index不会等于current 即可触发原来的类.
      this.current = 99
    }
  },
}
</script>

<style lang="less" scoped>
.home-brick-box {
  .box-hd {
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 28px;
      font-weight: 300;
    }
    .more {
      display: flex;
      align-items: center;
      font-family: 'icomoon';
      span {
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }
  .brick-item-wrapper {
    .brick-promo-item-big {
      float: left;
      transition: all 0.3s;

      img {
        height: 614px;
      }
    }
    .brick-promo-item-big-mouseEnter {
      float: left;
      transform: translateY(-3px);
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }

    .currentMouseEnter {
      transform: translateY(-3px);
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
      margin-left: 15px;
      margin-bottom: 15px;
      float: left;
      transition: all 0.3s;
    }
    .brick-item {
      margin-left: 15px;
      margin-bottom: 15px;
      float: left;
      transition: all 0.3s;
    }
  }
}
</style>