import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import ElementPlus from 'unplugin-element-plus/vite'
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
    vueJsx(),
    dts({
      entryRoot: './packages/core',
      outDir: ['./packages/core/es'],
      tsconfigPath: './packages/core/tsconfig.json'
    }),
    ElementPlus({})
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
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
