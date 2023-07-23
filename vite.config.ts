import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './packages/core',
      outDir: ['./packages/core/dist/es', './packages/core/dist/core'],
      tsconfigPath: './packages/core/tsconfig.json'
    }),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  build: {
    outDir: './packages/core',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['./packages/core/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: './packages/core/dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
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
