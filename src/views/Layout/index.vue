<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!--二级路由的出口 解决路由缓存问题：方案1 添加key 破坏复用机制 强制销毁组件  -->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view></router-view>
    <LayoutFooter />
  </div>
</template>

<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { onMounted } from "vue";

// 触发获取导航列表的action
import { useCategoryStore } from "@/stores/category";
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>

<style></style>
