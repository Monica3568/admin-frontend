<template>
  <!-- 大盒子 -->
  <div class="layout_container">
    <!-- 侧边栏 -->
    <div class="layout_slider">

    </div>
    <!-- 顶部 -->
    <div class="layout_tabbar">

    </div>
    <!-- 主体内容 -->
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: #b3c0d1;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    padding: 20px;
  }

  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabbar-height);
    overflow-y: auto;

  }
}
</style>