import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router'],
      dirs: ['./src/utils', './src/apis'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true
    })
  ],
  resolve: {
    alias: {
      '@/': '/src/'
    }
  }
})
