<template>
  <!-- 左侧大盒子 -->
  <el-container class="layout-container">
    <!-- 左侧导航栏 -->
    <el-aside>
      <!-- logo -->
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="layout-scrollbar">
        <el-menu
          background-color="#304156"
          text-color="white"
          active-text-color="#409EFF"
        >
          <!-- 动态引入菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部导航栏 -->
      <el-header style="text-align: right; font-size: 12px"></el-header>
      <!-- 主体内容 -->
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout-container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container .el-aside {
  // color: var(--el-text-color-primary);
  background-color: $base-menu-background;
  height: 100%;
  width: 200px;

  .layout-scrollbar {
    width: 100%;
    height: calc(100vh - $base-menu-logo-height);
  }
}

.layout-container .el-menu {
  border-right: none;
}

.layout-container .el-main {
  padding: 0;
}

.layout-container .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
