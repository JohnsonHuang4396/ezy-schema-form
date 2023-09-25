import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import vitePluginImp from 'vite-plugin-imp'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

const CORE_PATH = 'packages/core/'

function formatEntryFileNames(name: string, extendName: 'mjs' | 'js') {
  if (name.startsWith('')) {
    return `${name.replace(CORE_PATH, '')}.${extendName}`
  }
  return `[name].${extendName}`
}

// const ELEMENT_COMPONENT_REFLECT = {
//   'form-item': 'form/src/form-item2.mjs',
//   option: 'select/src/option.mjs',
//   'option-group': 'select/src/option-group.mjs',
//   'checkbox-group': 'checkbox/src/checkbox-group2.mjs',
//   'checkbox-button': 'checkbox/src/checkbox-button.mjs',
//   'radio-group': 'radio/src/radio-group2.mjs',
//   'radio-button': 'radio/src/radio-button2.mjs'
// }

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
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: 'element-plus',
    //       libDirectory: 'es/components',
    // nameFormatter: (name: string) => {
    //   const formattedName = name.replace('el-', '')
    //   console.log('formattedName :>>', formattedName)
    //   if (ELEMENT_COMPONENT_REFLECT[formattedName as keyof typeof ELEMENT_COMPONENT_REFLECT])return ''
    //     // return ELEMENT_COMPONENT_REFLECT[formattedName as keyof typeof ELEMENT_COMPONENT_REFLECT]
    //   return `${name.replace('el-', '')}/index.mjs`
    // },
    //       style(name) {
    //         return `element-plus/es/components/${name.replace('el-', '')}/style/index.mjs`
    //       }
    //     }
    //   ]
    // })
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
