export type OmitId<T> = Omit<T, 'id'>

export type CompPropsLimit<Comp> = Partial<OmitId<Comp>>
