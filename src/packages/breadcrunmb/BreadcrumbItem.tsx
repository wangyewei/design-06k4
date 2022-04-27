import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";

export interface BreadcrumbItemProps {
  href?: string,
  sparator?: ReactNode,
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>,
  children?: ReactNode,
  style?: CSSProperties,
  className?: string,
}

const KBreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {

  const { children, style, sparator = '/', className, onClick, ...restprops } = props

  const prefixCls = getPrefixCls('breadcrumb-item')

  const cname = classNames(
    prefixCls,
    className
  )
  let link: ReactNode;
  if ('link' in props) {
    link = (
      <a className={`${prefixCls}-link`} onClick={onClick} {...restprops}>{children}</a>
    )
  } else {
    link = (
      <span className={`${prefixCls}-link`} onClick={onClick} {...restprops}>{children}</span>
    )
  }
  return (
    <li className={cname}>{link}{sparator && <span className={`${prefixCls}-sparator`}>{sparator}</span>}</li>
  )
}

KBreadcrumbItem.displayName = 'KBreadcrumbItem'

export default KBreadcrumbItem

// hanppy birthday to me
// 2022-4-26 wangyewei