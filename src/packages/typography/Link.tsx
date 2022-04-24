import React, { forwardRef, ReactNode, HTMLAttributes, CSSProperties } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";



export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string,
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
}

const Link = forwardRef<HTMLDivElement, LinkProps>((props) => {

  const { children, className, href, style, ...restProps } = props

  const prefixCls = getPrefixCls('link')
  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <a href={href} style={{ ...style }} {...restProps} className={cnames}>
      {children}
    </a>
  )
})

export default Link