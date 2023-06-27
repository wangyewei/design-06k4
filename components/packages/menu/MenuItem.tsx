import React, { CSSProperties, forwardRef, ReactNode, useContext } from "react";
import KIcon, { IconProps } from "../icon";
import classNames from "classnames";
import { getPrefixCls } from "@/utils";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  level?: number,
  itemKey?: string | number,
  className?: string,
  style?: CSSProperties,
  children?: ReactNode,
  icon?: IconProps['icon'],
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {

  const {
    level = 0,
    className,
    style,
    children,
    itemKey,
    icon,
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...restProps } = props

  const { collapsed, mode, selected, setSelected } = useContext(MenuContext)

  const prefixCls = getPrefixCls('menu-item')
  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}-item`]: mode,
      [`${prefixCls}-${mode}-item-selected`]: selected.includes(itemKey)
    },
    className
  )


  return (
    <li ref={ref}
      className={cnames}
      style={{ ...style }}
      data-menu-id={itemKey}
      onClick={e => {
        const arrCopy = level === 0 ?
          [(e.target as HTMLElement).dataset.menuId] :
          [(e.target as HTMLElement).parentElement.parentElement.dataset.menuId, (e.target as HTMLElement).dataset.menuId];
        setSelected(arrCopy)
        onClick && onClick()
      }}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
      {...restProps} >
      {icon && <KIcon icon={icon} className={`${prefixCls}-${mode}-item-icon`} />}{!collapsed && children}
    </li>
  )
})

export default MenuItem