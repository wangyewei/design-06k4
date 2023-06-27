import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { VisibleContext } from "./Dropdown";

export interface DropDwonMenuProps {
  arrow?: boolean,
  children?: ReactNode,
  style?: CSSProperties,
  className?: string,
}
const KDropdownMenu: FC<DropDwonMenuProps> = (props) => {

  const { visible } = useContext(VisibleContext)

  const { className, children, arrow, ...restProps } = props

  const prefixCls = getPrefixCls('dropdown-menu')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-visible-hidden`]: !visible,
      [`${prefixCls}-arrow`]: !!arrow
    },
    className
  )
  return (
    <ol className={cname}{...restProps}>{children}</ol>
  )
}

export default KDropdownMenu