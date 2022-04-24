import React, { forwardRef, ReactNode, HTMLAttributes, CSSProperties, MouseEventHandler } from "react";
import classNames from "classnames";
import { getPrefixCls, tupleStr } from "@/utils";

const TextType = tupleStr('default', 'secondary', 'success', 'warning', 'danger')
export type TextTypes = typeof TextType[number]

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties,
  type?: TextTypes,
  disabled?: boolean,
  mark?: boolean,
  underline?: boolean,
  isDelete?: boolean,
  strong?: boolean,
  italic?: boolean,
  onClick?: MouseEventHandler<HTMLSpanElement>
}

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  const {
    children,
    className,
    style,
    type = "default",
    disabled = false,
    mark = false,
    underline = false,
    isDelete = false,
    strong = false,
    italic = false,
    onClick,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('text')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-mark`]: mark,
      [`${prefixCls}-underline`]: underline,
      [`${prefixCls}-delete`]: isDelete,
      [`${prefixCls}-strong`]: strong,
      [`${prefixCls}-italic`]: italic,
    },
    className
  )

  return (
    <span ref={ref}
      className={cname}
      style={{ ...style }}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </span>
  )
})

export default Text
