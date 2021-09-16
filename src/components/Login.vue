<template>
  <div class="layout">
    <!-- <h1>hehe</h1> -->

    <div class="layout-side"></div>

    <div class="layout-content">
      <div class="layout-header">
        <div class="layout-title">
          <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
          <div class="title">小米账号</div>
        </div>
        <div class="layout-nav">
          <div class="layout-nav-item">
            <a href="#">用户协议</a>
            <a href="#">隐私政策</a>
            <a href="#">帮助中心</a>
          </div>
          <div class="layout-nav-select-language">
            <div class="cn">中文(简体)</div>
            <div class="triangle"></div>
            <div class="dropdown">
              <div>中文(繁体)</div>
              <div>English</div>
            </div>
          </div>
        </div>
      </div>
      <LayoutCard />
    </div>
  </div>
</template>

<script>
import LayoutCard from './LayoutCard.vue'
export default {
  name: 'Login',
  components: {
    LayoutCard
  }

}
</script>

<style lang="less" scoped>
@media screen and (max-width: 750px) {
  .layout-side {
    display: none;
  }
  .layout .layout-content {
    position: relative;
    width: 100%;
    left: 0;
  }
}
.layout-side {
  position: absolute;

  width: 375px;
  height: 100%;
  background: url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.4994397e.jpg)
    no-repeat;
  background-size: cover;
  background-position: 50%;
  z-index: -99;
}

.layout-content {
  position: absolute;
  left: 375px;
  top: 0;
  right: 0;
  bottom: 0;
  .layout-header {
    display: flex;
    justify-content: space-between;
    margin: 20px;

    .layout-title {
      display: flex;
      align-items: center;
      flex-shrink: 0;

      img {
        width: 40px;
        margin-right: 10px;
      }
      .title {
        font-size: 24px;
        font-weight: 500;
      }
    }
    .layout-nav {
      display: flex;
      align-items: center;
      flex-shrink: 0;

      font-size: 14px;
      .layout-nav-item {
        display: flex;
        align-items: center;
        margin: 0 20px;
        height: 100%;
        a {
          padding: 20px;
          &:hover {
            color: @base-color;
          }
        }
        &::after {
          content: '';
          display: inline-block;
          height: 12px;
          width: 1px;
          background-color: @bc-color2;
        }
      }
      .layout-nav-select-language {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        &:hover .cn {
          color: @base-color;
        }
        .cn {
          display: flex;
          align-items: center;
          height: 100%;
          margin-right: 5px;
        }
        .triangle {
          border: 3.5px solid @bc-color2;
          border-right-color: transparent;
          border-top-color: transparent;
          transform: rotate(-45deg);
          transform-origin: 37.5% 62.5%;
          transition: all 0.3s;
        }
        &:hover .triangle {
          border: 3.5px solid @base-color;
          border-right-color: transparent;
          border-top-color: transparent;
          transform: rotate(135deg);
          transform-origin: 37.5% 62.5%;
          transition: all 0.3s;
        }
        &:hover .dropdown {
          display: block;
        }
        .dropdown {
          position: absolute;
          top: 50px;
          left: 0;
          display: none;
          width: 100%;
          border-radius: 3px;
          background-color: #fff;
          box-shadow: 0px 5px 20px rgb(236, 236, 236);

          div {
            height: 40px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;

            &:hover {
              background-color: #fff3e6;
            }
          }
        }
      }
    }
  }
}
</style>