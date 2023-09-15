import { ref } from "vue";
import { getCategoryAPI } from "@/apis/layout";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore(
  "category",
  () => {
    // 导航列表的逻辑

    // state 导航列表数据
    const categoryList = ref([]);

    // action 获取导航数据的方法
    const getCategory = async () => {
      const res = await getCategoryAPI();
      categoryList.value = res.result;
      // console.log(res);
    };

    return {
      categoryList,
      getCategory,
    };
  },
  // 持久化配置 存入localstorage
  {
    persist: true,
  }
);
