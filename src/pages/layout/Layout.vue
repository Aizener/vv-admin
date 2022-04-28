<script setup lang="ts">
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider>
      <Menu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.n-layout {
  width: 100%;
  height: 100%;
  &-sider {
    box-shadow: 1px 0 5px #ccc;
    position: relative;
    z-index: 3;
  }
  &-header {
    position: relative;
    z-index: 2;
    height: 54px;
  }
}
</style>
