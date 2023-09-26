import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
    Components({
      dts: './packages/core/types/components.d.ts',
      types: [
        {
          from: 'element-plus',
          names: ['ElAutocomplete', 'ElCascader', 'ElDatePicker', 'ElInput', 'ElInputNumber', 'ElSwitch']
        }
      ],
      resolvers: [ElementPlusResolver()]
    })
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
      ]
    },
    lib: {
      entry: './packages/core/index.ts'
    }
  }
})
