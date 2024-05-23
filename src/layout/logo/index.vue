<template>
  <div class="logo">
    <img src="../../../public/logo.png" alt="" />
    <p>she后台管理系统</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: $base-logo-title-fontSize;
    font-style: normal;
    color: #ffffff;
  }
}
</style>
