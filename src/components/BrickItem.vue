<template>
  <div class="brick-item-wrapper">

    <div class="brick-item">
      <div class="figure-img"> <img :src="goods.src" alt=""></div>

      <h4 class="title">{{goods.title}}</h4>
      <h5 class="desc">{{goods.desc}}</h5>
      <h5 class="price">
        <span class="num">{{goods.price}}</span><span>元起</span>
      </h5>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BrickItem',
  props: ['goods']
}
</script>

<style lang="less" scoped>
.brick-item {
  height: 300px;
  width: 233px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .figure-img {
    display: flex;
    width: 160px;
    height: 160px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
    }
  }
  .title {
    margin-bottom: 5px;
  }
  .desc {
    margin-bottom: 10px;
    color: #b7b0b0;
  }
  .price {
    color: red;
  }
}
</style>