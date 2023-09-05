import type { Component } from 'vue'

export type OmitId<T> = Omit<T, 'id'>

export type RenderComponent<T> = T extends { comp: 'custom' }
  ? T & { renderComponent: Component }
  : T & { renderComponent?: never }

export type CtlModelValue =
  | { ctl?: true; updateModelValue?: never }
  | { ctl?: false; updateModelValue?: (value: any) => void }

export type CompPropsLimit<Comp> = Partial<OmitId<Comp>>

export type FormCompPropsAntEmits<Props = object, Actions = never> = {
  attrs?: CompPropsLimit<Props>
  actions?: Partial<Actions>
}

export type FormatEmits<T extends Record<string, (...args: any) => void>> = {
  [K in keyof T]: T[K] extends (...args: any) => void ? [...Parameters<T[K]>] : never
}
