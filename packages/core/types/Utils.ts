import type { Component } from 'vue'

export type OmitId<T> = Omit<T, 'id'>

export type RenderComponent<T> = T extends { comp: 'custom' }
  ? T & { renderComponent: Component }
  : T & { renderComponent?: never }

export type CompPropsLimit<Comp> = Partial<OmitId<Comp>>

export type FormCompPropsAntEmits<Props = object, Actions = never> = {
  attrs?: CompPropsLimit<Props>
  actions?: Partial<Actions>
}
