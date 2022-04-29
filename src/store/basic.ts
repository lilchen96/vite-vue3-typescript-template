/*
 * @Author: chenzihan
 * @Date: 2022-04-28 17:43:48
 * @LastEditTime: 2022-04-29 14:51:11
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\store\basic.ts
 */
import { defineStore } from 'pinia';

export const useBasicStore = defineStore({
  id: 'basic',
  state: () => {
    return {
      keepAliveRoutes: new Array<string>()
    };
  },
  actions: {
    addKeepAliveRoutes(name: string) {
      this.keepAliveRoutes.push(name);
    }
  },
  getters: {}
});
