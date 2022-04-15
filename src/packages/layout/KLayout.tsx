import React, { Children, FC, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";

export interface BasicProps extends HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
}

interface BasicPropsWithTagName extends BasicProps {
  tagName: 'header' | 'footer' | 'main' | 'section';
}

const BasicLayout = forwardRef<HTMLDivElement, BasicPropsWithTagName>((props, ref) => {

  const {
    className,
    style,
    tagName: Tag,
    children
  } = props

  const prefixCls = getPrefixCls('layout')

  const cnames = classNames({
    prefixCls,
    className,
  })

  return (
    <Tag ref={ref}
      className={cnames}
      style={{ ...style }}>
      {children}
    </Tag>
  )
})

export default BasicLayout