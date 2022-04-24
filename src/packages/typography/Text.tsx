import React, { forwardRef, ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
import { getPrefixCls, tupleStr } from "@/utils";

const TextType = tupleStr('default', 'secondary', 'success', 'warning', 'danger')
export type TextTypes = typeof TextType[number]

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
  type?: TextTypes,
}

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    children,
    className,
    style,
    type = "default",
    ...restProps
  } = props

  const prefixCls = getPrefixCls('text')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className
  )

  return (
    <span ref={ref}
      className={cname}
      style={{ ...style }}
      {...restProps}
    >
      {children}
    </span>
  )
})

export default Text
