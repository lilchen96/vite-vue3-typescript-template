/*
 * @Author: chenzihan
 * @Date: 2022-04-29 10:21:49
 * @LastEditTime: 2022-04-29 15:33:09
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\src\api\request.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { BASE_URL } from '@/config';

const mode = import.meta.env.MODE;

const request = axios.create({
  baseURL: $config.BASE_URL[mode],
  custom: {
    loading: false, // 是否loading
    isToken: true // 是否需要token
  }
});

request.interceptors.request.use(
  (config) => {
    console.log(config);

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    console.log(response);
  },
  (err) => {
    console.log(err);
  }
);

export default request;
