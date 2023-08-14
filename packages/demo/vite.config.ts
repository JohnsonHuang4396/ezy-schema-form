import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'vue-router', 'pinia'],
      dirs: ['./src/utils', './src/apis', './src/store'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true
    }),
    Components({
      dts: './src/typings/components.d.ts',
      resolvers: [ElementPlusResolver({})]
    }),
    unocss()
  ],
  resolve: {
    alias: {
      '@/': '/src/'
    }
  }
})
