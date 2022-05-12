import React, { forwardRef, CSSProperties, Component, createContext, ForwardRefExoticComponent, RefAttributes, ReactNode, ReactHTMLElement, useRef, ReactElement, Dispatch, SetStateAction, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import MenuItem, { MenuItemProps } from './MenuItem'
import SubMenu, { SubMenuProps } from './SubMenu'


type Mode = 'horizontal' | 'vertical'

type SelectedType = number | string

export interface MenuProps {
  defaultSelected?: SelectedType[]
  mode?: Mode
  style?: CSSProperties,
  className?: string,
  children?: ReactNode,
  collapsed?: boolean
}

export const MenuContext = createContext<{
  mode: Mode,
  selected: SelectedType[],
  setSelected: Dispatch<SetStateAction<SelectedType[]>>
  collapsed: boolean
}>(null)
const RowMenu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {

  const { mode = 'horizontal', defaultSelected, children, className, style, collapsed = false, ...restProps } = props

  const prefixCls = getPrefixCls('menu')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-${mode}`]: mode,
      [`${prefixCls}-${mode}-collapesd`]: mode === "vertical" && collapsed
    },
    className
  )

  const [selected, setSelected] = useState<Array<string | number>>(defaultSelected)
  return (
    <MenuContext.Provider value={{
      mode,
      selected,
      setSelected,
      collapsed
    }}>
      <ul ref={ref} className={cnames} style={{ ...style }}  {...restProps}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
})

class KMenu extends Component<MenuProps, {}> {

  static Item: ForwardRefExoticComponent<MenuItemProps & RefAttributes<HTMLLIElement>> = MenuItem

  static SubMenu: ForwardRefExoticComponent<SubMenuProps & RefAttributes<HTMLLIElement>> = SubMenu

  menu: HTMLUListElement | null

  render() {
    return (
      <RowMenu ref={node => this.menu = node}
        {...this.props}
      >
        {this.props.children}
      </RowMenu>
    )
  }
}

export default KMenu