/*
 * @Author: chenzihan
 * @Date: 2022-04-29 16:21:24
 * @LastEditTime: 2022-04-29 16:21:53
 * @LastEditors: chenzihan
 * @Description: 
 * @FilePath: \vite-vue3-typescript-template\vite.config.ts
 */
/*
 * @Author: chenzihan
 * @Date: 2022-04-27 11:27:56
 * @LastEditTime: 2022-04-29 15:52:45
 * @LastEditors: chenzihan
 * @Description:
 * @FilePath: \vue3-ts-vite-template\vite.config.ts
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    target: 'es2015'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    VueSetupExtend(),
    visualizer(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          '@/api/index': [['default', '$api']],
          '@/store/index': [['default', '$store']],
          '@/config/index': [['*', '$config']]
        }
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components/global'],
      deep: false,
      dts: 'src/components.d.ts'
    })
  ],
  server: {
    host: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
});
