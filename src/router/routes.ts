/*
 * @Author: chenzihan
 * @Date: 2022-04-28 16:52:54
 * @LastEditTime: 2022-04-29 09:31:35
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\router\routes.ts
 */
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/templateA'
  },
  {
    path: '/templateA',
    name: 'TemplateA',
    meta: {
      title: '模板A',
      keepAlive: true
    },
    component: () => import('@/pages/templateA/index.vue')
  },
  {
    path: '/templateB',
    name: 'TemplateB',
    meta: {
      title: '模板B',
      keepAlive: true
    },
    component: () => import('@/pages/templateB/index.vue')
  }
];
export default routes;
