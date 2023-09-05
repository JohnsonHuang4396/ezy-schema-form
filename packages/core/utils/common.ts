export function upperFirstLetter(word: string) {
  let firstLetter = word[0].toUpperCase()
  return firstLetter + word.slice(1)
}
