<script setup lang="ts">
import { Component, h } from "vue";
import { NIcon } from 'naive-ui';
import {
  Apps as App
} from '@vicons/ionicons5';

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: '菜单1',
    key: 'menu1',
    icon: renderIcon(App)
  },
  {
    label: '菜单2',
    key: 'menu2',
    icon: renderIcon(App)
  },
  {
    label: '菜单3',
    key: 'menu3',
    icon: renderIcon(App),
    children: [
      {
        label: '菜单3-子级1',
        key: 'menu3-child1'
      },
      {
        label: '菜单3-子级2',
        key: 'menu3-child2'
      }
    ]
  }
];

const handleUpdateValue = () => {
  console.log('222');
};
</script>

<template>
  <n-menu
    :options="menuOptions"
    @update:value="handleUpdateValue"
  />
</template>

<style lang="scss">

</style>
