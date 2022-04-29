/*
 * @Author: chenzihan
 * @Date: 2022-04-29 10:54:26
 * @LastEditTime: 2022-04-29 14:22:35
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\api\auth\index.ts
 */
import request from '@/api/request';
/**
 * @description: 登录
 * @param {object} data
 * @return {*}
 */
export function login(data: { name: Response.DefaultResponse; password: string }) {
  return request({
    method: 'post',
    url: '/login',
    data,
    custom: {
      isToken: false,
      loading: true
    }
  });
}
