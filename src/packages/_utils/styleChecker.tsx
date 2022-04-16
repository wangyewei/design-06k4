import { canUseDom, isStyleSupport } from "@/utils"

export const canUseDocElement = () => canUseDom() && window.document.documentElement;

let flexGagSupported: boolean | undefined

// const { createElement } = document

export const detectFlexGapSupported = () => {
  if (!canUseDocElement()) return false

  if (flexGagSupported !== undefined) return flexGagSupported

  const flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'colum'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  flexGagSupported = flex.scrollHeight === 1
  document.body.removeChild(flex)

  return flexGagSupported
}

