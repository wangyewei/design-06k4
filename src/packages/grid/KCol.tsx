import React, { FC, HTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { getPrefixCls } from '@/utils/index'


type ColSpanType = number | string
type FlexType = number | 'none' | 'auto' | string

export interface ColSize {
  flex?: FlexType,
  span?: ColSpanType
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  flex?: FlexType
  span?: ColSpanType

}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const

const KCol = forwardRef<HTMLDivElement, ColProps>((props, ref) => {

  const {
    span,
    children,
    className,
    style,
    ...restProps
  } = props

  const prefixCls: string = getPrefixCls('col')

  let sizeCls = {}
  sizes.forEach((size: string) => {
    let sizeProps: ColSize = {}
    const propsSize = props[size]
    if (typeof propsSize === 'number') {
      sizeProps.span = propsSize
    } else if (typeof propsSize === 'object') {
      sizeProps = propsSize || {}
    }

    delete restProps[size]

    sizeCls = {
      ...sizeCls,
      [`${prefixCls}=${size}-${sizeProps}`]: sizeProps.span !== undefined,
    }
  })

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-${span}`]: span !== undefined
    },
    className,
    sizeCls
  )

  return (
    <div className={cnames}
      ref={ref}
      style={{ ...style }}
      {...restProps}>
      {children}
    </div>
  )
})

export default KCol