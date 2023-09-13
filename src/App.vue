<template>
  <!-- 一级路由出口组件 -->
  <router-view></router-view>
  <div class="test">test scss</div>
</template>
<script setup></script>

<style lang="scss" scoped>
.test {
  color: $xtxColor;
}
</style>
