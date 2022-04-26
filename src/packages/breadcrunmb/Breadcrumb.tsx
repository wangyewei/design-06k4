import React, { cloneElement, CSSProperties, FC, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import KBreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";
import { childrenToArray, getPrefixCls } from "@/utils";

export interface BreadcrumbProps {
  sparator?: ReactNode,
  style?: CSSProperties,
  className?: string,
  children?: ReactNode
}

interface BreadcrumbPreProps extends FC<BreadcrumbProps> {
  Item?: typeof KBreadcrumbItem;
}

const KBreadcrumb: BreadcrumbPreProps = (props) => {

  const { children, className, style, sparator = '/', ...restProps } = props

  const prefixCls = getPrefixCls('breadcrumb')

  const cname = classNames(
    prefixCls,
    className
  )

  let crumbs;
  if (children) {
    crumbs = childrenToArray(children).map((element: ReactElement, index) => {
      if (!element) return element

      return cloneElement(element, {
        sparator,
        key: index,
      })
    })
  }
  return (
    <nav className={cname} style={{ ...style }} {...restProps}>
      <ol>{children}</ol>
    </nav>
  )
}

KBreadcrumb.displayName = 'KBreadcrumb'

KBreadcrumb.Item = KBreadcrumbItem

export default KBreadcrumb