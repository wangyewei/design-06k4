import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, ReactNode, useState, useEffect, FC } from "react";

export interface AffixProps {
  offsetTop?: number,
  offsetBottom?: number,
  style?: CSSProperties,
  className?: string,
  children: ReactNode,
  onChange?: (affixed?: boolean) => void,
  target?: () => Window | HTMLElement | null,
}

enum AffixSatus {
  None,
  Prepare
}

export interface AffixState {
  affixStyle?: CSSProperties,
  placeholderStyle?: CSSProperties

  status: AffixSatus,
  lastAffix: boolean,
  prevTatget: Window | HTMLElement | null
}
let componentdidUpdate: 'update' | 'updated' = 'update'


const KAffix: FC<AffixProps> = (props) => {

  const { className, children, onChange } = props

  const prefixCls = getPrefixCls('affix')

  const cnames = classNames(
    prefixCls,
    className
  )

  let [state, setState] = useState<AffixState>({
    status: AffixSatus.None,
    lastAffix: false,
    prevTatget: null
  })

  let placeholderNode: HTMLDivElement;

  let fixedNode: HTMLDivElement;

  // 获取固钉目标
  const getTargetFn = () => {
    const { target } = props

    if (target !== undefined) {
      return target
    }
    return getDefaultTarget
  }

  // 获取顶部距离
  const getOffsetTop = () => {
    const { offsetBottom, offsetTop = 10 } = props
    return offsetBottom === undefined && offsetTop === undefined ? 0 : offsetTop
  }

  // 获取底部距离
  const getOffsetBottom = () => {
    const { offsetBottom } = props
    return offsetBottom
  }

  // 
  const saveFiexdNode = (node: HTMLDivElement) => {
    fixedNode = node
  }

  const savePlaceholderNode = (node: HTMLDivElement) => {
    placeholderNode = node
  }

  window.addEventListener('scroll', () => {
    measure()
  })


  const measure = () => {
    const { status, lastAffix } = state

    const targetFn = getTargetFn()

    if (!fixedNode || !placeholderNode || !targetFn) {
      return
    }
    const offsetTop = getOffsetTop()
    const offsetBottom = getOffsetBottom()

    const targetNode = targetFn()

    // console.log('targetNode', targetNode)
    if (!targetNode) return

    const newState: Partial<AffixState> = {
      status: AffixSatus.None
    }
    // 元素相对于视窗的位置
    // const targetRect = getTargetRect(targetNode)

    // const placeholderRect = getTargetRect(placeholderNode)
    // const fixedTop = getFiexdTop(placeholderRect, targetRect, offsetTop)
    // const fixedBottom = getFiexdBottom(placeholderRect, targetRect, offsetBottom)

    if (placeholderNode?.getBoundingClientRect().top) {

      if (placeholderNode?.getBoundingClientRect().top <= offsetTop) {
        newState.affixStyle = {
          position: 'fixed',
          top: offsetTop + 'px'
        }
      }
    }
    // if (fixedTop !== undefined) {
    //   newState.affixStyle = {
    //     position: 'fixed',
    //     top: fixedTop + 'px',
    //     width: placeholderRect.width,
    //     height: placeholderRect.height,
    //   }

    //   newState.placeholderStyle = {
    //     width: placeholderRect.width,
    //     height: placeholderRect.height
    //   }
    // } else if (fixedBottom !== undefined) {
    //   newState.affixStyle = {
    //     position: 'fixed',
    //     bottom: fixedBottom + 'px',
    //     width: placeholderRect.width,
    //     height: placeholderRect.height
    //   }

    //   newState.affixStyle = {
    //     width: placeholderRect.width,
    //     height: placeholderRect.height
    //   }
    // }

    newState.lastAffix = !!newState.affixStyle

    if (onChange && lastAffix !== newState.lastAffix) {
      onChange
    }

    setState(newState as AffixState)
  }

  const prepareMesure = () => {
    setState({
      status: AffixSatus.Prepare,
      affixStyle: undefined,
      placeholderStyle: undefined
    } as AffixState)
  }

  // componentdidUpdate
  useEffect(() => {
    if (componentdidUpdate === 'update') {
      const { prevTatget } = state
      const targetFn = getTargetFn()
      const newTarget = targetFn?.() || null

      if (prevTatget !== newTarget) {
        setState({ prevTatget: newTarget } as AffixState)
      }
      measure()
      componentdidUpdate = 'updated'
    }
  })



  const { affixStyle } = state

  return (
    <div ref={savePlaceholderNode}>
      <div ref={saveFiexdNode} className={cnames} style={affixStyle}>
        {children}
      </div>
    </div>
  )
}

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}


export default KAffix
