import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

const CORE_PATH = 'packages/core/'

function formatEntryFileNames(name: string, extendName: 'mjs' | 'cjs') {
  console.log('name :>>', name)
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
      outDir: ['./packages/core/dist/es', './packages/core/dist/lib'],
      tsconfigPath: './tsconfig.json'
    }),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  build: {
    outDir: '/',
    rollupOptions: {
      external: ['vue'],
      input: ['./packages/core/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'mjs'),
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'cjs'),
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/dist/lib'
        }
      ]
    },
    lib: {
      entry: './packages/core/index.ts'
    }
  }
})
