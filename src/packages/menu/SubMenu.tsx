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
  itemKey?: string | number,
}

const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>((props, ref) => {

  const { className, children, title, icon, itemKey, ...restProps } = props

  const { mode } = useContext(MenuContext)

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
      className={cnames}
      icon={icon}
      itemKey={itemKey}
      {...restProps}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >

      {title}

      <ul className={submenuCls}>
        {children}
      </ul>

    </MenuItem>
  )

})

export default SubMenu