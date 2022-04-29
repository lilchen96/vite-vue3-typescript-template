/*
 * @Author: chenzihan
 * @Date: 2022-04-27 16:44:44
 * @LastEditTime: 2022-04-29 14:59:10
 * @LastEditors: chenzihan
 * @Description: eslint配置文件
 * @FilePath: \vue3-ts-vite-template\.eslintrc.js
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],

  rules: {
    // override/add rules settings here, such as:
    'vue/multi-word-component-names': 'off'
  }
};
