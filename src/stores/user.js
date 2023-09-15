// 管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { ref } from "vue";
import { useCartStore } from "./cartStore";

// defineStore('模块名', () => {})
export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 1.定义管理用户数据的state
    const userInfo = ref({});
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };

    // 退出时清空用户信息
    const clearUserInfo = () => {
      userInfo.value = {};
      // 执行清除购物车的action函数
      cartStore.clearCart()
    };

    // 3.以对象的形式将state和action return出去
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  // 持久化配置 存入localstorage
  {
    persist: true,
  }
);
