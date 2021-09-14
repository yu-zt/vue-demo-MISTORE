<template>
  <div class="home-brick-box-wrapper">
    <div class="home-brick-box">
      <div class="box-hd">
        <span class="title">{{goods.title}}</span>
        <div class="more">
          <span v-for="(item,index) in goods.more" :key="index" :class="`more-${index}`"
                @mouseenter="moreEnter(index)">{{item}}</span>
        </div>

      </div>
      <div class="brick-item-wrapper clearfix">
        <!-- 最前面的2张小海报 -->
        <div class="brick-promo-item-small-wrapper ">
          <div class="brick-promo-item-small " @mouseenter="flag=0"
               :class="{'brick-promo-item-small-mouseEnter':flag==0}" @mouseleave="flag=2">
            <a :href="smallBox[0].link">
              <img :src="smallBox[0].src" alt="">
            </a>
          </div>
          <div class="brick-promo-item-small " @mouseenter="flag=1"
               :class="{'brick-promo-item-small-mouseEnter':flag==1}" @mouseleave="flag=2">
            <a :href="smallBox[1].link">
              <img :src="smallBox[1].src" alt="">
            </a>
          </div>
        </div>
        <!-- 后面7个小画面 -->
        <a :href="goods.link" v-for="(goods,index) in currentGoods" :key="index"
           :class="{currentMouseEnter:current==index,'brick-item':current!=index}"
           @mouseenter="brickMouseenter(index)" @mouseleave="brickMouseleave">
          <BrickItem :goods="goods" />
        </a>
        <!-- 最后2个最小的画面 -->
        <div class="small-item">
          <!-- 最小画面1 -->

          <a :href="smallestBox.link" v-if="smallestBox">
            <div class="small-item-box" :class="{'small-item-mouseenter':currentSmallBox==0}"
                 @mouseenter="currentSmallBox=0" @mouseleave="currentSmallBox=2">
              <div class="text">
                <h4 class="title">{{smallestBox.title}}</h4>
                <h5 class="price">
                  <span class="num">{{smallestBox.price}}</span><span>元起</span>
                </h5>
              </div>
              <div class="space"></div>
              <div class="figure-img"> <img :src="smallestBox.src" alt=""></div>
            </div>
          </a>
          <!-- 最小画面2 -->
          <a href="#">
            <div class="small-item-box" :class="{'small-item-mouseenter':currentSmallBox==1}"
                 @mouseenter="currentSmallBox=1" @mouseleave="currentSmallBox=2">
              <div class="text">
                <h3 class="title2">浏览更多</h3>
                <h5>
                  <span>{{goods.more[currentMore]}}</span>
                </h5>
              </div>
              <div class="space"></div>

              <div class="icon-right"> </div>

            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrickItem from './BrickItem.vue'
export default {
  components: { BrickItem },
  name: 'HomeBrickBox',
  props: ['goods', 'goodsList', 'smallBox', 'smallestBox'],
  data () {
    return {
      currentGoods: [],
      //判断more的选择
      currentMore: 0,
      //判断前面2张小海报的选择
      currentSmallBox: 2,
      flag: 2,
      //判断当前index值使用
      current: 99,
    }
  },
  mounted () {
    this.moreEnter(0)
  },
  methods: {
    moreEnter (index) {
      this.currentMore = index
      index == 0 ? this.currentGoods = this.goodsList.slice(index, 7) : this.currentGoods = this.goodsList.slice(7)
    },
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
      cursor: pointer;
      span {
        margin-left: 10px;
      }
      //给文字添加过渡变化效果
      .more-0,
      .more-1,
      .more-2 {
        &:hover {
          color: @base-color;
          border-bottom: 2px solid @base-color;
        }
      }
    }
  }
  .brick-item-wrapper {
    .brick-promo-item-small-wrapper {
      width: 234px;
      float: left;
    }
    .brick-promo-item-small {
      float: left;
      margin-bottom: 15px;
      transition: all 0.3s;
      img {
        height: 300px;
      }
    }
    .brick-promo-item-small-mouseEnter {
      float: left;
      margin-bottom: 15px;
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

    .small-item {
      float: left;
      margin-left: 15px;
      width: 234px;
      height: 300px;
      .small-item-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 142.5px;
        margin-bottom: 15px;
        background-color: #fff;
        transition: all 0.3s;
        .text {
          flex: 0.9;
          // float: left;
          padding-left: 30px;
          .title {
            margin-bottom: 10px;
          }
          .title2 {
            margin-bottom: 10px;
            // font-size: 20px;
          }
          .price {
            color: red;
          }
        }
        .space {
          flex: 0.1;
        }
        .figure-img {
          padding-right: 10px;
          flex: 0.8;
          // padding: 20px 5px 20px 5px;

          img {
            width: 100%;
          }
        }
        .icon-right {
          padding-right: 10px;
          flex: 0.8;
          font-family: 'icomoon';
          font-size: 50px;
          color: @base-color;
        }
      }
      .small-item-mouseenter {
        width: 100%;
        height: 142.5px;
        margin-bottom: 15px;
        transform: translateY(-3px);
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        background-color: #fff;
      }
    }
  }
}
</style>