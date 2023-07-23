import _Test from './Test.vue'
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

type CompType = { name: string }

function withInstall<T>(comp: CompType & T) {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    const name = comp.name
    app.component(name, comp)
  }
  return comp
}

const Test = withInstall(_Test)

export default Test
