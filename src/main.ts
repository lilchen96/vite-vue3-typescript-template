/*
 * @Author: chenzihan
 * @Date: 2022-04-28 16:09:06
 * @LastEditTime: 2022-04-29 15:49:43
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\main.ts
 */
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';

const store = createPinia();
createApp(App).use(store).use(router).mount('#app');
