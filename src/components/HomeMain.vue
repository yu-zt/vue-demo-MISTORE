<template>
  <div class="main-wrapper">
    <div class="main">
      <div class="home-banner-wrapper">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f334fbd05d5681bb838fefd1c815d88c.jpg?thumb=1&w=1226&h=120&f=webp&q=90"
             alt="">
      </div>

      <HomeBrickBox :goods="phone" :goodsList="phoneList" :bigBox="phoneBigBox" />
      <HomeBrickBoxStyle2 :goods="tv" :goodsList="tvList" :smallBox="television"
                          :smallestBox="televisionSmall" />
      <HomeBrickBoxStyle2 :goods="inte" :goodsList="tvList" :smallBox="intelligent" />
    </div>

  </div>
</template>

<script>

import HomeBrickBox from './HomeBrickBox.vue'
import HomeBrickBoxStyle2 from './HomeBrickBoxStyle2.vue'
export default {
  components: { HomeBrickBox, HomeBrickBoxStyle2 },
  name: 'HomeMain',
  data () {
    return {
      phone: { title: '手机', more: ['查看更多', ''] },

      phoneList: [
        { id: '001', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab07e0fcbec3beb8b0f409db8bee8da4.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: 'Xiaomi MIX 4', desc: 'CUP全面屏', price: '4999', link: '#' },
        { id: '002', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61454401f855cf5ed64747a6ac04bae5.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米MIX FOLD", desc: '折叠大屏｜自研芯片', price: '4999', link: '#' },
        { id: '003', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8909080ddb0851af0b87530e2927844f.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米11 Ultra", desc: 'CUP全面屏', price: '2349', link: '#' },
        { id: '004', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dc32ec73299ff79556dcd1cf0f0ac11.png?thumb=1&w=200&h=200&f=webp&q=90", title: "小米11 Pro", desc: '1/1.12 GN2｜2K四微曲屏', price: '1999', link: '#' },
        { id: '005', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb69512d9d6430d865d457ec52eebb51.png?thumb=1&w=200&h=200&f=webp&q=90", title: "小米11 青春版", desc: '5G小金刚｜旗舰长续航', price: '3429', link: '#' },
        { id: '006', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/34caee2c867bfd8c5e0dc2d8c663e121.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米10S", desc: '1/1.12 GN2｜骁龙888', price: '2399', link: '#' },
        { id: '007', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb554f30eaa0316b0a736c3d59f21584.png?thumb=1&w=200&h=200&f=webp&q=90', title: 'Xiaomi MIX 4', desc: '小米11 青春版 轻薄', price: '4999', link: '#' },
        { id: '008', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b7fbb6fe07907c60f08358adab5adfe.png?thumb=1&w=200&h=200&f=webp&q=90', title: 'Xiaomi MIX 4', desc: '轻薄电竞设计', price: '4999', link: '#' },
      ],
      phoneBigBox: { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c583f2edc613f1be20fa415910b13ce3.jpg?thumb=1&w=234&h=614&f=webp&q=90', link: '#' }
      ,
      tv: { title: '家电', more: ['热门', '电视影音'] },

      tvList: [
        { id: '001', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '小米电视6 55”  OLED', desc: '大屏更享受', price: '4999', link: '#' },
        { id: '002', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米电视4A 70英寸", desc: '潮流全面屏设计', price: '4999', link: '#' },
        { id: '003', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecbe6a6c0d4950b78b086d7ada654e3b.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米电视6 65”  OLED", desc: '人工智能语音系统,超高清画质', price: '2349', link: '#' },
        { id: '004', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5572d6d4adea2e8e9f936ef19024dd4.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米电视6 至尊版 65英寸", desc: '新一代金属全面屏', price: '1999', link: '#' },
        { id: '005', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03a9e7e96a09d256ca1badeec186c859.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米电视 ES43 2022款", desc: '全面屏设计', price: '3429', link: '#' },
        { id: '006', src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=200&h=200&f=webp&q=90", title: "小米电视 ES75 2022款<", desc: '高清液晶屏，人工智能系统', price: '2399', link: '#' },
        { id: '007', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f674ced205c2e81125dfd2d6659aabfc.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '金属全面屏电视', desc: '澎湃音效影院级体验', price: '4999', link: '#' },
        { id: '008', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: 'Redmi全自动波轮洗衣机1A 8kg', desc: '一键操作，父母都爱用', price: '4999', link: '#' },
        { id: '009', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7826279526dcce1e5a8b2eff2fa49784.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '米家集尘扫拖机器人', desc: '自动倒垃圾，45天手不沾尘', price: '4999', link: '#' },
        { id: '010', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/91bd66c0e6bf7a22d12a8b191da19078.jpg?thumb=1&w=200&h=200&f=webp&q=90', title: '米家超薄电磁炉', desc: '纤薄美学，精准猛火', price: '4999', link: '#' },
        { id: '011', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bed167fc905bab57dee478bcf1e5e0d.JPG?thumb=1&w=200&h=200&f=webp&q=90', title: '米家互联网对开门冰箱 540L', desc: '重磅新品福利特惠', price: '4999', link: '#' },
      ],
      television: [
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d47879ec183e25a36e67e0219636e60.jpg?thumb=1&w=234&h=300&f=webp&q=90', link: '#' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca83e0294e7d725690b0576a1a4681e2.jpg?thumb=1&w=234&h=300&f=webp&q=90', link: '#' },
      ],
      televisionSmall: { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&w=100&h=100&f=webp&q=90', title: '米家互联网烟灶套装（天然气）', price: '2999', link: '#' },
      inte: { title: '智能', more: ['热门', '安防', '出行'] },
      intelligent: [
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1768bd133e9fd0236765c8abc98f8b3.png?thumb=1&w=234&h=300&f=webp&q=90', link: '#' },
        { src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&w=234&h=300&f=webp&q=90', link: '#' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.main-wrapper {
  margin-top: 30px;
  background-color: #f5f5f5;

  .main {
    width: 1228px;
    margin: 0 auto;
    padding: 10px 0;
    .home-banner-wrapper {
      height: 120px;
      margin: 20px 0;
    }
    &::before {
      content: ' ';
      display: table;
    }
  }
}
</style>