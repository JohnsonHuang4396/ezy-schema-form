<center><h1>Core of ezy-schema-form</h1></center>

> A data-drive form made by Element-plus and Vue3. But you don't have to install Element-plus as your dependency, it's already integrate Element-plus.

[Document]()

[Demo]()

**How to use**

- npm i ezy-schema-form

- import ezy-schema-form's installer at main.ts, and use `Vue.use`

```js
import App from './App.vue'
import EzySchemaForm from 'ezy-schema-form'
import { createApp } from 'vue'

const app = createApp(App)
app.use(Vue3Form)

app.mount('#app')
```

- then you can use ezy-schema-form in your project directly

```html
<template>
  <SchemaForm
    ref="schemaFormRef"
    :config="schema"
  />
</template>

<script
  lang="ts"
  setup
>
  import { ref } from 'vue'
  import type { Vue3FormProps } from 'ezy-schema-form'

  const schema = ref<Vue3FormProps>({
    classList: [],
    formModel: formModel.value,
    schema: [
      {
        field: 'name',
        ctl: false,
        label: '名称',
        defaultValue: 'hqh',
        rule: { required: true, message: '请输入名称', trigger: ['blur'] },
        component: {
          comp: 'input',
          attrs: {
            maxlength: 100,
            disabled: false,
            clearable: true
          }
        },
        updateModelValue(val: string) {
          formModel.value.name = val
        }
      }
    ]
  })
</script>
```
