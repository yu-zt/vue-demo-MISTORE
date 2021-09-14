<template>
  <div>
    <a :href="data.link">
      <div :style="{width:'316px',height:`${homePromoSize.h} px`}">
        <img :src="data.src" alt="">
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomePromoList',
  props: ['homePromoSize', 'data']
}
</script>

<style scoped lang="less">
img {
  width: 100%;
}
</style>