import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

const CORE_PATH = 'packages/core/'

function formatEntryFileNames(name: string, extendName: 'mjs' | 'cjs') {
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
      outDir: ['./packages/core/dist/es'],
      tsconfigPath: './tsconfig.json'
    }),
    ElementPlus({ useSource: true })
  ],
  build: {
    outDir: '/',
    rollupOptions: {
      external: ['vue', /\.scss/],
      input: ['./packages/core/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'mjs'),
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/dist/es'
        }
        // {
        //   format: 'cjs',
        //   entryFileNames: ({ name }) => formatEntryFileNames(name, 'cjs'),
        //   preserveModules: true,
        //   exports: 'named',
        //   dir: './packages/core/dist/lib'
        // }
      ]
    },
    lib: {
      entry: './packages/core/index.ts'
    }
  }
})
