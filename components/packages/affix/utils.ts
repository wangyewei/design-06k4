export type BindElement = HTMLElement | Window | null | undefined
export function getTargetRect(target: BindElement): DOMRect {
  // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, bottom: window.innerHeight } as DOMRect)
}

export function getFiexdTop(
  placeholderRect: DOMRect,
  targetRect: DOMRect,
  offsetTop?: number
) {
  console.log(offsetTop)
  if (offsetTop !== undefined && targetRect.top > placeholderRect.top - offsetTop) {
    return offsetTop + placeholderRect.top
  }
  return undefined
}

export function getFiexdBottom(
  placeholderRect: DOMRect,
  targetRect: DOMRect,
  offsetBottom?: number
) {
  if (offsetBottom !== undefined && targetRect.bottom < placeholderRect.bottom + offsetBottom) {
    const targetBottomOffset = window.innerHeight - targetRect.bottom
    return targetBottomOffset + offsetBottom
  }
  return undefined
}