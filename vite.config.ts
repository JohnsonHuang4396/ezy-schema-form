import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vitePluginImp from 'vite-plugin-imp'
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
      outDir: ['./packages/core/es', './packages/core/lib'],
      tsconfigPath: './tsconfig.json'
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
            return `element-plus/es/components/${name.replace('el-', '')}/style/css.mjs`
          }
        }
      ]
    }),
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
            source: bundler.code
              .replace(/\.scss/g, '.css')
              .replace('../packages/core/components/', '')
          })
        }
      }
    }
  ],
  build: {
    outDir: '/',
    rollupOptions: {
      external: ['vue', 'element-plus', /\.scss/],
      input: ['./packages/core/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'mjs'),
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/es'
        },
        {
          format: 'cjs',
          entryFileNames: ({ name }) => formatEntryFileNames(name, 'cjs'),
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/lib'
        }
      ]
    },
    lib: {
      entry: './packages/core/index.ts'
    }
  }
})
