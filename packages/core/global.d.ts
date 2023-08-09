// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    Test: typeof import('./components/Test/index')['Test']
  }
}

export {}
