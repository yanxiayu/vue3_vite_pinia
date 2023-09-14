<!-- 纯展示类组件，这类组件的封装思想是：抽象props参数，传什么就显示什么
     类似函数，定义好形参，实参传过来什么就是什么
-->
<template>
  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<script setup>
 defineProps({
  goods: {
    type: Object,
    // 对象的默认值需要将他作为一个工厂函数返回
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
 .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all 0.5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
      }
    }
</style>
