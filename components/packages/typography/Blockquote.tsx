import React, { forwardRef, ReactNode, HTMLAttributes, CSSProperties, MouseEventHandler } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";

export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties,
  onClick?: MouseEventHandler<HTMLDivElement>,
}

const Blockquote = forwardRef<HTMLDivElement, BlockquoteProps>((props, ref) => {

  const { children, className, style, onClick, ...restProps } = props

  const prefixCls = getPrefixCls('blockquote')
  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <div ref={ref} style={{ ...style }} {...restProps} className={cnames} onClick={onClick}>
      {children}
    </div>
  )
})

export default Blockquote