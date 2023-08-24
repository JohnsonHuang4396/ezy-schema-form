// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    SchemaForm: (typeof import('./components/SchemaForm/index'))['SchemaForm']
    SchemaFormItem: (typeof import('./components/SchemaForm/index'))['SchemaFormItem']
  }
}

export {}
