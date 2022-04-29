/*
 * @Author: chenzihan
 * @Date: 2022-04-28 16:51:12
 * @LastEditTime: 2022-04-29 15:57:29
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\router\index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { DEFAULT_DOCUMENT_TITLE } from '@/config';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {
  const basicStore = $store.useBasicStore();
  console.log(basicStore.keepAliveRoutes);
  const routeName = to.name as string;
  // 设置网页title
  document.title = (to.meta.title as string) || DEFAULT_DOCUMENT_TITLE;
  // 设置keepalive路由缓存
  if (to.meta.keepAlive) {
    if (to.meta.keepAlive) {
      if (!basicStore.keepAliveRoutes.includes(routeName)) {
        basicStore.addKeepAliveRoutes(routeName);
      }
    }
  }
});

export default router;
