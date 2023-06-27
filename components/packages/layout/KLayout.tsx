import React, { Children, FC, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";

export interface BasicProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string
  hasSider?: boolean;
}

export interface GenneratorProps {
  suffixCls: string,
  tagName: 'header' | 'footer' | 'main' | 'section',
  displayName: string
}

interface BasicPropsWithTagName extends BasicProps {
  tagName: 'header' | 'footer' | 'main' | 'section';
}


function gennerator({ suffixCls, tagName, displayName }: GenneratorProps) {
  return (BasicComponent: any) => {
    const Adapter = forwardRef<HTMLLIElement, BasicProps>((props, ref) => {
      const prefixCls = getPrefixCls(suffixCls)
      return (
        <BasicComponent ref={ref}
          prefixCls={prefixCls}
          tagName={tagName}
          {...props} />
      )
    })

    Adapter.displayName = displayName
    return Adapter
  }
}

const BasicLayout = forwardRef<HTMLDivElement, BasicPropsWithTagName>((props, ref) => {

  const {
    prefixCls,
    className,
    style,
    tagName: Tag,
    children
  } = props

  const cnames = classNames(
    prefixCls,
    className,
  )

  return (
    <Tag ref={ref}
      className={cnames}
      style={{ ...style }}>
      {children}
    </Tag>
  )
})

const Layout = gennerator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout)

const Header = gennerator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Footer'
})(BasicLayout)

const Footer = gennerator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(BasicLayout)

const Content = gennerator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(BasicLayout)

export { Header, Footer, Content }


export default Layout