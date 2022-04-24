import React, { forwardRef, ReactNode, HTMLAttributes, CSSProperties, MouseEventHandler } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";



export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string,
  children?: ReactNode,
  className?: string,
  style?: CSSProperties,
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const Link = forwardRef<HTMLDivElement, LinkProps>((props) => {

  const { children, className, href, style, onClick, ...restProps } = props

  const prefixCls = getPrefixCls('link')
  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <a href={href} style={{ ...style }} className={cnames} onClick={onClick} {...restProps}>
      {children}
    </a>
  )
})

export default Link