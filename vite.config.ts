/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:12:09
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2022-03-06 13:49:58
 * @Version: 1.0
 * @FilePath: \design-06k4-2\vite.config.ts
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: resolve(__dirname, 'src')}]
  }
})
