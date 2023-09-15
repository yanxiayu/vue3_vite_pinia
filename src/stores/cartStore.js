// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1.定义state cartList
    const cartList = ref([]);
    // 2.定义action addCart
    // 添加购物车操作
    const addCart = (goods) => {
      // 已添加过 count + 1
      // 没有添加过 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过

      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        // 找到了
        item.count++;
      } else {
        // 没找到
        cartList.value.push(goods);
      }
    };

    // 删除购物车商品
    const delCart = (skuId) => {
      // 思路：1.找到要删除项的下标值 splice
      // 2.使用数组的过滤方法 filter
      const idx = cartList.value.findIndex((item) => {
        skuId === item.skuId;
      });
      cartList.value.splice(idx, 1);
    };

    // 计算属性
    // 1.总的数量 count之和
    const allCount = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count, 0));
    // 2.总价格 所有项count*price之和
    // acc累加值,每次回调函数执行时累积计算的结果。
    // cur每一项,当前值
    const allPrice = computed(() => cartList.value.reduce((acc, cur) => acc + cur.count * cur.price, 0));

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
    };
  },
  // 持久化配置 存入localstorage
  {
    persist: true,
  }
);
