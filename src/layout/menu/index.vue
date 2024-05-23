<template>
  <!-- 循环遍历全部路由，判断是否有子路由，没有子路由就展示一个菜单项，有子路由就展示一个下拉菜单 -->
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 判断是否有子路由,没有子路由就直接展示 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>{{ item.meta.tittle }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 判断子路由是否只有一个，只有一个子路由就直接展示 -->
    <!-- <el-menu-item v-if="item.children && item.children.length === 1" :index="item.children[0].path">
      <template #title>
        <span>{{ item.children[0].meta.tittle }}</span>
      </template>
    </el-menu-item> -->

    <!-- 判断子路由是否大于一个，大于一个就展示一个下拉菜单 -->
    <el-sub-menu
      v-if="item.children && item.children.length >= 1"
      :index="item.path"
    >
      <template #title>
        <span>{{ item.meta.tittle }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script lang="ts" setup>
//获取父组件穿过的全部路由
defineProps(['menuList'])
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style setup lang="scss"></style>
