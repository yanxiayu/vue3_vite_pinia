<template>
  <div>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!--二级路由的出口  -->
    <router-view></router-view>
    <LayoutFooter />
  </div>
</template>

<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
</script>

<style></style>
