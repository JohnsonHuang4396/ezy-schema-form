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
      outDir: ['./packages/core/dist/es', './packages/core/dist/lib'],
      tsconfigPath: './tsconfig.json'
    }),
    ElementPlus({ useSource: true }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]
          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.scss/g, '.css')
          })
        }
      }
    }
  ],
  build: {
    outDir: '/',
    cssCodeSplit: true,
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
