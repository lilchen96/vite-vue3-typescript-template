/*
 * @Author: chenzihan
 * @Date: 2022-04-28 16:27:16
 * @LastEditTime: 2022-04-29 14:51:22
 * @LastEditors: chenzihan
 * @Description: pinia store module模板文件
 * @FilePath: \vue3-ts-vite-template\src\store\template.ts
 */
import { defineStore } from 'pinia';

export const useTemplateStore = defineStore({
  id: 'template',
  state: () => {
    return {
      str: '默认'
    };
  },
  actions: {
    setStr(str: string) {
      this.str = str;
    }
  },
  getters: {
    strSplit: (state) => {
      return state.str.split('');
    }
  }
});
