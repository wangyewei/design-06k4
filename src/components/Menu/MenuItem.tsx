import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuITem: React.FC<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const classes = classNames('yewei-menu-item', className, {
    'is-disabled': disabled,
  })

  return (
    <li
      className={classes}
      style={style}
    >
      {children}
    </li>
  )
}