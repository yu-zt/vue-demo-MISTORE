<template>
  <div class="children-list-wrapper">
    <ul>
      <li v-for="(item,index) in childrenList" :key="index">
        <a href="#">
          <img class="children-list-img" :src="item.src" alt=""><span
                calss="children-list-title">{{item.title}}</span>
        </a>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ChildrenList',
  props: ['childrenList']
}
</script>

<style lang="less" scoped>
.children-list-wrapper {
  height: 460px;
  width: 994px;
  ul {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    flex-wrap: wrap;
    height: 100%;
    background-color: rgb(255, 255, 255, 0.1);
    box-shadow: 5px 5px 10px rgb(223, 223, 223, 0.3);

    color: @bc-color;
    li {
      margin: 18px 0;
    }
  }
  .children-list-img {
    width: 40px;
    margin: 0 10px 0 20px;
  }
}
</style>