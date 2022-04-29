/*
 * @Author: chenzihan
 * @Date: 2022-04-28 17:38:01
 * @LastEditTime: 2022-04-29 10:38:30
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\config\index.ts
 */
export const DEFAULT_DOCUMENT_TITLE = '项目名';

// 后端服务地址
export const SERVER_URL = {
  development: '',
  test: '',
  production: ''
};

// 代理url
export const BASE_URL: {
  [key: string]: string;
} = {
  development: '/api',
  test: '/api',
  production: '/api'
};
