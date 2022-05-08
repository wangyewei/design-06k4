import { getPrefixCls, childrenToArray } from "@/utils";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import React, { CSSProperties, forwardRef, ReactNode, useContext, cloneElement, ReactElement, useState } from "react";

export interface MenuItemProps {
  itemKey?: string | number,
  className?: string,
  style?: CSSProperties,
  children?: ReactNode,
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {

  const { className, style, children, itemKey, ...restProps } = props

  const { mode, selected, setSelected } = useContext(MenuContext)

  const prefixCls = getPrefixCls('menu-item')
  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}-item`]: mode,
      [`${prefixCls}-${mode}-item-selectd`]: itemKey === selected
    },
    className
  )


  return (
    <li ref={ref}
      className={cnames}
      style={{ ...style }}
      data-menu-id={itemKey}
      onClick={e => {
        setSelected((e.target as HTMLElement).dataset.menuId)
      }}
      {...restProps} >
      {children}
    </li>
  )
})

export default MenuItem