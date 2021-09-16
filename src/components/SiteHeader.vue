<template>
  <div class="site-header">
    <div class="container">
      <div class="header-logo"></div>
      <div class="nav-mainlist">
        <ul>
          <li v-for="(item,index) in navMainList" :key="index">
            <a href="#">{{item}}</a>
          </li>
        </ul>
      </div>
      <form action="">
        <div :class="{'header-search':true,'input-click':inputClickFlag}">
          <input type="text" :placeholder="headerSearch[1]" @focus="inputClickFlag= true"
                 @blur="inputClickFlag=false">
          <a href="#" :class="{'input-click-a-tag' :inputClickFlag}">
            <div class="search-icon"></div>
          </a>

        </div>
        <div class="keyword-list" v-show="inputClickFlag">
          <ul>
            <li><a href="#">全部商品</a></li>
            <li v-for="(item,index) in headerSearch" :key="index">{{item}}</li>
          </ul>
        </div>

      </form>

    </div>

  </div>
</template>

<script>
// import HomeSwiper from './HomeSwiper.vue'
export default {
  name: 'SiteHeader',
  data () {
    return {

      navMainList: ['小米手机', ' Redmi 红米', '电视', '笔记本', '平板', '家电', '路由器', '智能硬件', '服务', '社区'],
      headerSearch: ['冰箱', '洗衣机', '电视', '小米11', '耳机', '空调', '平板'],
      inputClickFlag: false,
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.site-header {
  height: 100px;
  width: 1228px;
  margin: 0 auto;
  .container {
    display: flex;
    position: relative;

    align-items: center;
    width: 100%;
    height: 100%;
    .header-logo {
      width: 56px;
      height: 56px;
      background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png)
        no-repeat;
      background-size: 56px;
      &:active {
        scale: 0.8;
      }
    }
    .nav-mainlist {
      margin-left: 120px;
      li {
        float: left;
        // margin: 0 5px;
      }
      a {
        padding: 20px 10px;
        &:hover {
          color: @base-color;
        }
      }
    }
    .input-click {
      border: 1px solid @base-color !important;
    }
    .input-click-a-tag {
      border-left: 1px solid @base-color !important;
    }
    form {
      display: flex;
      position: absolute;
      right: 0;
    }
    .header-search {
      display: flex;
      justify-content: space-between;

      width: 296px;
      height: 50px;

      border: 1px solid #e0e0e0;
      input {
        flex: 0.82;
        padding-left: 10px;
        height: 50px;
        outline: none;
        border: none;
      }
      a {
        flex: 0.18;
        display: flex;
        justify-content: center;
        border-left: 1px solid #e0e0e0;
        align-items: center;
        &:hover {
          background-color: @base-color;
        }
        &:hover .search-icon {
          color: white;
        }
      }
      .search-icon {
        font-family: 'icomoon';
        font-size: 24px;
      }
    }
    .keyword-list {
      position: absolute;
      left: 0;
      top: 50px;
      overflow: hidden;
      width: 243.7px;
      border: 1px solid @base-color;
      border-top: none;
      background-color: #fff;
      z-index: 99;

      li {
        width: 100%;
        padding: 7px 0;
        padding-left: 20px;
        font-size: 12px;
        &:hover {
          background-color: #fafafa;
        }
      }
    }
  }
}
</style>
