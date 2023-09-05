const symbolMap = new Map()

export function useContext() {
  function set(key: string) {
    if (symbolMap.has(key)) return

    const provideSymbol = Symbol(key)
    symbolMap.set(key, provideSymbol)
  }

  function get(key: string) {
    return symbolMap.get(key)
  }

  return { set, get }
}
