import React, { forwardRef, ReactNode, useContext, Ref, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import MenuItem from "./MenuItem";
import { IconProps } from "../icon";

export interface SubMenuProps {
  className?: string,
  children?: ReactNode,
  title?: ReactNode,
  icon?: IconProps['icon'],
  itemKey?: string | number
}

const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>((props, ref) => {

  const { className, children, title, icon, itemKey, ...restProps } = props

  const { mode, collapsed } = useContext(MenuContext)

  const [visible, setVisible] = useState<boolean>(false)
  const prefixCls = getPrefixCls('menu-submenu')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}`]: mode
    },
    className
  )

  const submenuCls = classNames(

    `${prefixCls}-${mode}-submenu`,
    {
      [`${prefixCls}-${mode}-submenu-open`]: !!visible
    }

  )

  return (
    <MenuItem ref={ref}
      level={1}
      className={cnames}
      icon={icon}
      itemKey={itemKey}
      {...restProps}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >

      {!collapsed && title}

      <ul className={submenuCls}>
        {!collapsed && children}
      </ul>

    </MenuItem>
  )

})

export default SubMenu