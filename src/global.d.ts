/*
 * @Author: chenzihan
 * @Date: 2022-04-29 14:21:51
 * @LastEditTime: 2022-04-29 14:24:35
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\global.d.ts
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare module 'axios' {
  // 补充axios请求自定义配置
  interface AxiosRequestConfig {
    custom?: {
      loading?: boolean;
      isToken?: boolean;
    };
  }
}

declare global {
  // 请求相关定义
  namespace Response {
    interface DefaultResponse<T = null> {
      code: number;
      data: T;
      msg: string;
    }
    type DefaultAxiosResponse<T = null> = AxiosResponse<DefaultResponse<T>>;
  }
}
