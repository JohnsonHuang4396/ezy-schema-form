import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './packages/lib',
      outDir: ['./packages/lib/dist/es', './packages/lib/dist/lib'],
      tsconfigPath: './packages/lib/tsconfig.json'
    })
  ],
  build: {
    outDir: './packages/lib',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['./packages/lib/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: './packages/lib/dist/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: './packages/lib/dist/lib'
        }
      ]
    },
    lib: {
      entry: './packages/lib/index.ts'
    }
  }
})
