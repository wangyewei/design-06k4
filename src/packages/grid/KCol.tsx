import React, { FC, HTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { getPrefixCls } from '@/utils/index'


type ColSpanType = number | string
type FlexType = number | 'none' | 'auto' | string

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  flex?: FlexType
  span?: ColSpanType

}

const KCol = forwardRef<HTMLDivElement, ColProps>((props, ref) => {

  const {
    children,
    className,
    ...restProps
  } = props

  const prefixCls: string = getPrefixCls('col')


  const cnames = classNames(
    className,
    prefixCls
  )

  // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

  return (
    <div className={cnames}
      {...restProps}>
      {children}
    </div>
  )
})