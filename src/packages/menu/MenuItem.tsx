import React, { CSSProperties, forwardRef, ReactNode, useContext } from "react";
import KIcon, { IconProps } from "../icon";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  itemKey?: string | number,
  className?: string,
  style?: CSSProperties,
  children?: ReactNode,
  icon?: IconProps['icon']
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {

  const { className, style, children, itemKey, icon, ...restProps } = props

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
      {icon && <KIcon icon={icon} className={`${prefixCls}-${mode}-item-icon`} />}{children}
    </li>
  )
})

export default MenuItem