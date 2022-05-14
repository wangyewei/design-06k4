import React, { cloneElement, CSSProperties, FC, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import KBreadcrumbItem, { BreadcrumbItemProps } from "./BreadcrumbItem";
import { childrenToArray, getPrefixCls } from "@/utils";

export interface Route {
  path: string,
  breadcrumbName: string,
  children?: Omit<Route, 'children'>[]
}

export interface BreadcrumbProps {
  sparator?: ReactNode,
  style?: CSSProperties,
  className?: string,
  children?: ReactNode,
  routes?: Route[],
  params?: any,
  itemRender?: (
    route: Route,
    param: any,
    routes: Route[],
    paths: string[]
  ) => ReactNode
}

interface BreadcrumbPreProps extends FC<BreadcrumbProps> {
  Item?: typeof KBreadcrumbItem;
}


const KBreadcrumb: BreadcrumbPreProps = (props) => {

  const { children,
    className,
    style,
    sparator = '/',
    routes,
    params = {},
    itemRender = defaultItemRender,
    ...restProps } = props

  const prefixCls = getPrefixCls('breadcrumb')

  const cname = classNames(
    prefixCls,
    className
  )

  let crumbs;
  if (routes && routes.length > 0) {
    const paths: string[] = [];
    crumbs = routes.map(route => {
      const path = getPath(route.path, params)

      if (path) {
        paths.push(path)
      }

      return (
        <KBreadcrumbItem sparator={sparator} key={path || route.breadcrumbName}>
          {itemRender(route, params, routes, paths)}
        </KBreadcrumbItem>
      )
    })

  } else if (children) {
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
      <ol>{crumbs}</ol>
    </nav>
  )
}

function getPath(
  path: string,
  params: any
) {
  path = (path || '').replace(/^\//, '')
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key])
  })

  return path
}

function defaultItemRender(
  route: Route,
  params: any,
  routes: Route[],
  paths: string[]
) {

  const isLastItem = routes.indexOf(route) === routes.length - 1
  const name = getBreadcrumbName(route, params)

  return isLastItem ? <span>{name}</span> : <a href={`#/${paths.join('/')}`}>{name}</a>
}

function getBreadcrumbName(
  route: Route,
  params: any
) {
  if (!route.breadcrumbName) {
    return null
  }

  const paramsKeys = Object.keys(params).join('|')
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacecment, key) => params[key] || replacecment
  )

  return name
}

KBreadcrumb.displayName = 'KBreadcrumb'

KBreadcrumb.Item = KBreadcrumbItem

export default KBreadcrumb

// hanppy birthday to me
// 2022-4-26 wangyewei