<template>
  <div class="category-wrapper">
    <a href="#">
      <div class="category-item" @mouseenter="childrenListDisplay"
           @mouseleave="childrenListDisplayNone">

        <span class="category">{{category}}</span>
        <span class="arrow"></span>

      </div>
    </a>
    <div class="children" v-for="item in childrenList" :key="item.id"
         @mouseenter="childrenListDisplay" @mouseleave="childrenListDisplayNone" v-show="item.flag">
      <ChildrenList :childrenList="item.listMessage" />
    </div>

  </div>

</template>

<script>
import ChildrenList from './ChildrenList.vue'
export default {
  name: 'CategoryItem',
  components: { ChildrenList },
  props: ['category', 'categoryIndex'],
  data () {
    return {
      childrenList: [
        {
          category: 'phone',
          listMessage: [{ src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fa2bae1f43611e80a8e4877719c76bdb.png", title: "Xiaomi MIX 4" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab345272bf9894bb8269d4901344b068.png", title: "小米MIX FOLD" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1241b5a94ba1739e85f72d46592af0e.png", title: "小米11 Ultra" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cf44dfe89111cb35e1a2211481ff546.png", title: "小米11 Pro" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72bd70039670d29610569421f753fcb6.png", title: "小米11 青春" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png", title: "小米10S" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png", title: "小米11" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png", title: "小米10" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0dfda044e0ddcfb3ef63e7e2b87daea3.png", title: "黑鲨4 Pro" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b7e7228d1708665b7e6fe5e07ad4929.png", title: "黑鲨4" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69a0df49cff71107977bbe3b48af15fa.png", title: "Redmi K30S 至尊纪念版" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg", title: "小米云服务" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg", title: "Redmi K30 至尊纪念版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/56bb7e2d44cef71c3afedaeae3d98927.png", title: "Note 10 Pro" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/79e2935264bf9247aa7512e330112820.png", title: "Note 10 5G" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab956ee82c24bdd83d21bc212aad3eb5.png", title: "K40 游戏增强版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e5aa3cab478f5eeba1c7d4cf25cba9a.png", title: "K40 Pro 系列" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png", title: "Redmi K40" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77bfd346ad97807237beca297cfe2fba.png", title: "Redmi 8A" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png", title: "Redmi Note 9 Pro" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png", title: "Redmi Note 9 5G" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/947721c8bc4a4ecc3bca17237ee64dea.png", title: "Redmi Note 9  4G" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1db88cd66ff1a6a3e75116988b7f3e12.jpg", title: "Redmi 9A" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/84e19ece0125992449a6276e2ba333e9.png", title: "手机上门维修" }]
          , id: '001',
        },
        {
          category: 'television',
          listMessage: [{ src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png", title: '小米电视6 55”  OLED' }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50194366cfebbc7c82489d0094c1f944.png", title: '小米电视6 65”  OLED' }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b91c9ef670fa1c12eddf23b209f9ff33.png", title: '小米电视 大师  77”  OLED' }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png", title: "小米电视6 至尊版 55英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png", title: "小米电视6 至尊版 65英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa3954f817a23443c0b6b523ebbd09f6.png", title: "小米电视6 至尊版 75英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png", title: "小米电视 ES43 2022款" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png", title: "小米电视 ES55 2022款" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png", title: "小米电视 ES65 2022款" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1c0d83dd59a3dd91372d867864b35554.png", title: "小米电视 ES75 2022款" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/319700f48d268f522664e1fc876b0044.png", title: "小米全面屏电视E43K" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d219d8b9c4a74eda4ae6c0222d194cd2.png", title: "金属全面屏电视" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/554a4f8ea0c2c3ed19d843bea7321203.jpg", title: "小米盒子" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7da49e7ada2229c963c9c7353a58d49b.png", title: "大师电视 65英寸 OLED" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da1680fb62238cb5b01998d80fc34e25.png", title: "小米电视5 Pro 75英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1df560d16cc983b0f34d24fc484bd697.png", title: "小米电视4A 60英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/070b329c18c1ab167df2a42564a67813.png", title: "Redmi 智能电视 X55" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8aeae36f5d088f22c84b8953bd0d08b4.jpg", title: "小米全面屏电视" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce75f4a3fef148b6729061a18f994aa7.png", title: "米家激光投影仪" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d649ec3d7d14da7090e396d56b7cc92.jpg", title: "Redmi 智能电视 MAX" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d707cdac2a19703b57e65212f32fd25b.png", title: "小米电视5 75英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6797917392e912577135d9eb8ad92f1f.png", title: "小米电视4A 70英寸" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8cb5791161d8b25897f60385f0ec7ab2.png", title: "小米电视4S 75英寸" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5732e8f317eb86bfcb174fbb49d00c4a.jpg", title: "小米壁画电视" }]
          , id: '002'
        },
        {
          category: 'television',
          listMessage: [{ src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d73037a32568723e7148395da0661ec5.png", title: "小米平板5" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b34e14c8896df008e17e73e5cfdd3e2c.png", title: "小米平板5 Pro" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg", title: "小米笔记本 Pro 14 增强版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png", title: "小米笔记本 Pro 15 增强版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png", title: "RedmiBook Pro 14 增强版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png", title: "RedmiBook Pro 15 增强版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e69fe4849e3e42bd4394e2be04a5c82.png", title: "小米笔记本 Pro X 15" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac38f4abb13391b5f254cd47aebb55bb.png", title: "RedmiBook Pro 14 锐龙版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70e30a90120626588b8ec6b96173776f.png", title: "RedmiBook Pro 15 锐龙版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53ac63f76d43a47fadb8eae6f43d6b04.png", title: "小米笔记本 Pro 15 锐龙版" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/32c652aa0d2da1d043b837eba6098541.png", title: "小米笔记本Pro 15" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76ab759c291b0741c4f267b5dbf05a91.jpg", title: "小米笔记本Pro 14" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/694e4b422f319e2c8cdd8fb1760f911c.png", title: "Redmi G 游戏本" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea840f3f79798c9a29d9921b9edf50ac.png", title: "RedmiBook Air 13" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b32e4db4b53b0c56c6040f094e96d945.png", title: "小米/Redmi 显示器" }, { src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0eb7e33b11443f6927e2035eca7c3d9e.png", title: "键鼠套装" }, { src: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c61933e7ac89c61bc727c275391e82e0.png", title: "鼠标" }]
          , id: '003'
        },

      ],
    }
  },
  mounted () {
    //给childrenList动态添加一个flag属性   ,判断是否需要显示
    for (let i = 0; i < this.childrenList.length; i++) {
      this.$set(this.childrenList[i], 'flag', false)
    }
  },
  methods: {
    childrenListDisplay () {
      if (this.childrenList[this.categoryIndex])
        this.childrenList[this.categoryIndex].flag = true
    },
    childrenListDisplayNone () {
      if (this.childrenList[this.categoryIndex])
        this.childrenList[this.categoryIndex].flag = false
    }
  },
}
</script>

<style lang="less" scoped>
.category-wrapper {
}
.category-item {
  display: flex;
  justify-content: space-between;
  padding: 11px 10px 10px 30px;
  font-weight: 300;
  color: white;
  &:hover {
    background-color: @base-color;
  }
  .arrow {
    font-size: 20px;
    font-family: 'icomoon';
  }
}
.children {
  position: absolute;
  top: 0;
  left: 234px;
}
</style>