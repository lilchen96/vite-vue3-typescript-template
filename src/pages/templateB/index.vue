<!--
 * @Author: chenzihan
 * @Date: 2022-04-28 16:56:46
 * @LastEditTime: 2022-04-29 14:56:56
 * @LastEditors: chenzihan
 * @Description: 
 * @FilePath: \vue3-ts-vite-template\src\pages\templateB\index.vue
-->

<template>
  <div>
    <h1>模板2</h1>
    <button @click="goTemplate">跳转template</button>
  </div>
</template>
<script setup lang="ts" name="TemplateB">
const router = useRouter();

const templateStore = $store.useTemplateStore();
templateStore.setStr('标题');
console.log(templateStore.strSplit);
console.log('进入了template2');

function goTemplate(): void {
  router.push({
    path: '/templateA'
  });
}
</script>
<style lang="scss" scoped></style>
