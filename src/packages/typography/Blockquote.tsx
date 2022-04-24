import React, { forwardRef, ReactNode, HTMLAttributes, CSSProperties } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";

export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
}

const Blockquote = forwardRef<HTMLDivElement, BlockquoteProps>((props, ref) => {

  const { children, className, style, ...restProps } = props

  const prefixCls = getPrefixCls('blockquote')
  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <div ref={ref} style={{ ...style }} {...restProps} className={cnames}>
      {children}
    </div>
  )
})

export default Blockquote