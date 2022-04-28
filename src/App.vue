<script setup lang="ts">
import { useMainStore } from "@/store/main";
console.log(useMainStore());
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
}
</style>
