export const findElement = (e: Element, className: string, end: string): boolean => {
  if (!e.className) {
    return false
  } else if (e.className.includes(className)) {
    console.log('here')
    return true
  } else if (e.id === end) {
    console.log('root')
    return false
  } else {
    findElement(e.parentElement, className, end)
  }
}