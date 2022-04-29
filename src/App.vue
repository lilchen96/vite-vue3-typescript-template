<!--
 * @Author: chenzihan
 * @Date: 2022-04-28 16:09:06
 * @LastEditTime: 2022-04-29 14:54:24
 * @LastEditors: chenzihan
 * @Description: 
 * @FilePath: \vue3-ts-vite-template\src\App.vue
-->
<template>
  <!-- {{ keepAliveRoutes }} -->
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="basicStore.keepAliveRoutes">
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
const basicStore = $store.useBasicStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
