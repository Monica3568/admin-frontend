<template>
  <div class="box"></div>
  <el-button>按钮</el-button>
  <Test />
</template>

<script setup lang="ts">
import Test from '@/components/Test.vue'

console.log(import.meta.env)
</script>

<style scoped lang="scss">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
