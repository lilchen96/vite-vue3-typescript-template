<!--
 * @Author: chenzihan
 * @Date: 2022-04-28 16:43:30
 * @LastEditTime: 2022-04-29 16:01:05
 * @LastEditors: chenzihan
 * @Description: 页面模板文件
 * @FilePath: \vue3-ts-vite-template\src\pages\templateA\index.vue
-->
<template>
  <div>
    <h1>模板一</h1>
    <h2>{{ templateStore.str }}</h2>
    <button @click="goTemplate2">跳转template2</button>
    <el-button>ssadasda</el-button>
    <div v-for="item in templateStore.strSplit">
      {{ item }}
    </div>
  </div>
</template>
<!-- <script setup lang="ts" name="TemplateA"> name为组件名称，为保证keepalive正常工作，需和route的name保持一致 -->
<script setup lang="ts" name="TemplateA">
const router = useRouter();
const templateStore = $store.useTemplateStore();
templateStore.setStr('标题');
console.log(templateStore.strSplit);

function goTemplate2(): void {
  router.push({
    path: '/templateB'
  });
}
</script>
<style lang="scss" scoped></style>
