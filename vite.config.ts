import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vitePluginImp from 'vite-plugin-imp'
import { defineConfig } from 'vite'

const CORE_PATH = 'packages/core/'

function formatEntryFileNames(name: string, extendName: 'mjs' | 'js') {
  if (name.startsWith('')) {
    return `${name.replace(CORE_PATH, '')}.${extendName}`
  }
  return `[name].${extendName}`
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './packages/core',
      outDir: ['./packages/core/es'],
      tsconfigPath: './packages/core/tsconfig.json'
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          libDirectory: 'es/components',
          nameFormatter: (name: string) => {
            if (name.replace('el-', '') === 'form-item') return 'form/src/form-item2.mjs'
            return `${name.replace('el-', '')}/index.mjs`
          },
          style(name) {
            return `element-plus/es/components/${name.replace('el-', '')}/style/index.mjs`
          }
        }
      ]
    })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'element-plus'],
      input: ['./packages/core/index.ts'],
      preserveEntrySignatures: 'exports-only',
      output: [
        {
          format: 'es',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'mjs'),
          preserveModules: false,
          exports: 'named',
          dir: './packages/core/es'
        }
        // {
        //   format: 'umd',
        //   name: 'vue3-form',
        //   entryFileNames: ({ name }) => formatEntryFileNames(name, 'js'),
        //   preserveModules: false,
        //   exports: 'named',
        //   dir: './packages/core/lib',
        //   globals: {
        //     vue: 'vue',
        //     'element-plus': 'element-plus'
        //   }
        // }
      ]
    },
    lib: {
      entry: './packages/core/index.ts'
    }
  }
})
