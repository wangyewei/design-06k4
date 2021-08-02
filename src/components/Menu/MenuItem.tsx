import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuITem: React.FC<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('yewei-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = (): void => {
    if (context.onSelect && !disabled && (typeof index === 'number')) {
      context.onSelect(index)
    }
  }
  return (
    <li
      className={classes}
      style={style}
      onClick={handleClick}
    >
      {children}
    </li>
  )
}

MenuITem.displayName = 'MenuItem'

export default MenuITem