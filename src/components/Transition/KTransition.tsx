import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

export type TransitionProps = CSSTransitionProps & {
  /**动画方式 */
  animation?: AnimationName,
  /**是否添加一层包裹 */
  wrapper?: boolean
}
/**
 * 动画组件，可以让您简单的操作实现有趣的动画交互
 * 
 * ### 使用方式
 * 
 * ~~~js
 * import { KTransition } from '06k4-design'
 * ~~~
 */
export const KTransition: FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
KTransition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default KTransition;