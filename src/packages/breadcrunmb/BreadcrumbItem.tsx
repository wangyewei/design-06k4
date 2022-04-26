import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode } from "react";

export interface BreadcrumbItemProps {
  href?: string,
  sparator?: ReactNode,
  children?: ReactNode,
  style?: CSSProperties,
  className?: string,
}

const KBreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {

  const { children, style, sparator = '/', className, ...restprops } = props

  const prefixCls = getPrefixCls('breadcrumb-item')

  const cname = classNames(
    prefixCls,
    className
  )
  let link: ReactNode;
  if ('link' in props) {
    link = (
      <a className={`${prefixCls}-link`} {...restprops}>{children}</a>
    )
  } else {
    link = (
      <span className={`${prefixCls}-link`} {...restprops}>{children}</span>
    )
  }
  return (
    <li>{link}{sparator && <span className={`${prefixCls}-sparator`}>{sparator}</span>}</li>
  )
}

KBreadcrumbItem.displayName = 'KBreadcrumbItem'

export default KBreadcrumbItem