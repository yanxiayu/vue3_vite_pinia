// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart.js";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);

    // 1.定义state cartList
    const cartList = ref([]);

    // 获取最新购物车列表action
    const updateNewList = async () => {
      const res = await findNewCartListAPI();
      cartList.value = res.result;
    };

    // 2.定义action addCart
    // 添加购物车操作
    const addCart = async (goods) => {
      const { skuId, count } = goods;
      if (isLogin.value) {
        // 登录后进入购物车逻辑
        await insertCartAPI({ skuId, count });
        updateNewList();
      } else {
        // 没有登录就执行本地逻辑
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
      }
    };

    // 删除购物车商品
    const delCart = async (skuId) => {
      if (isLogin.value) {
        // 调用接口实现删除功能，ids传递过来的是skuId组成数组
        await delCartAPI([skuId]);
        updateNewList();
      } else {
        // 思路：1.找到要删除项的下标值 splice
        // 2.使用数组的过滤方法 filter
        const idx = cartList.value.findIndex((item) => {
          skuId === item.skuId;
        });
        cartList.value.splice(idx, 1);
      }
    };

    // 计算属性
    // 1.总的数量 count之和
    const allCount = computed(() =>
      cartList.value.reduce((acc, cur) => acc + cur.count, 0)
    );

    // 2.总价格 所有项count*price之和
    // acc累加值,每次回调函数执行时累积计算的结果。
    // cur每一项,当前值
    const allPrice = computed(() =>
      cartList.value.reduce((acc, cur) => acc + cur.count * cur.price, 0)
    );

    // 3.已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((acc, cur) => acc + cur.count, 0)
    );

    // 4.已选择商品价格总计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((acc, cur) => acc + cur.count * cur.price, 0)
    );

    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过sku找到要修改的那一项，然后把它的selected修改为传过来的selected
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    // 是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    // 全选功能
    const allCheck = (selected) => {
      // 把cartList中的每一项的selected都设置为当前全选框的状态
      cartList.value.forEach((item) => (item.selected = selected));
    };

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
    };
  },
  // 持久化配置 存入localstorage
  {
    persist: true,
  }
);
