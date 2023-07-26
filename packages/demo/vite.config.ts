import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import vitePluginImp from 'vite-plugin-imp'
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
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          libDirectory: 'es/components',
          nameFormatter: (name: string) => {
            return `${name.replace('el-', '')}/index.mjs`
          },
          style(name) {
            return `element-plus/es/components/${name.replace(
              'el-',
              ''
            )}/style/css.mjs`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@/': '/src/'
    }
  }
})
