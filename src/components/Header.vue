<template>
  <div>
    <div class="header">
      <div class="top-nav-wrapper">

        <div class="top-nav">
          <ul>
            <li v-for="(item,index) in nav" :key='index'>
              <router-link to="/shopping-mall">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class="top-info">
          <ul>
            <!-- <li v-for="(item,index) in navInfo" :key='index'><a href="#">{{item}}</a></li> -->
            <li v-for="(item,index) in navInfo" :key='index'>
              <router-link to="/login">{{item}}</router-link>
            </li>
          </ul>
        </div>
        <div class='shopcart'>
          <a href="#">
            <span>购物车</span>
            <span>({{shopCartNum}})</span>
            <div class="shopcart-menu">
              <span>购物车中还没有商品，赶紧选购吧！</span>
            </div>
          </a>

        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      nav: ['小米商城', 'MIUI', 'loT', '云服务', '天星数科', '有品', '小爱开放平台', '企业团购', '资质证照', '协议规则', '下载app', '智能生活', 'Select Location']
      ,
      navInfo: ['登录', '注册', '消息通知'],
      shopCartNum: 0
    }
  },
}
</script>

<style scoped lang='less'>
.header {
  width: 100%;
  height: 40px;
  background-color: @bc-color;
  .top-nav-wrapper {
    display: flex;
    margin: 0 auto;
    width: 1228px;
    height: 100%;

    li {
      float: left;
      margin-right: 20px;
    }
    a {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      color: #b0b0b0;
      &:hover {
        color: white;
      }
    }
    .top-nav {
      flex: 3;
      height: 100%;
    }
    .top-info {
      flex: 0.5;
    }
    .shopcart {
      position: relative;
      flex: 0.4;
      height: 100%;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: #424242;

        transition-delay: 0.3s;
        &:hover {
          //过渡持续0秒 ,即马上触发
          transition: all 0s;
          color: @base-color;
          background-color: white;
        }
        &:hover .shopcart-menu {
          visibility: visible;
          color: @bc-color;
          height: 120px;
          transition: all 0.3s;
          span {
            display: block;
          }
        }
        &::before {
          font-family: 'icomoon';
          content: '\e93a';
          margin-right: 5px;
          font-size: 16px;
        }
      }
      .shopcart-menu {
        position: absolute;
        visibility: hidden;
        background-color: white;
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
        right: 0;
        top: 40px;
        height: 0px;
        width: 318px;
        text-align: center;
        line-height: 120px;
        transition: all 0.3s;
        z-index: 999;
        span {
          display: none;
        }
      }
    }
  }
}
</style>