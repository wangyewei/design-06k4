import React, { forwardRef, CSSProperties, Component, createContext, ForwardRefExoticComponent, RefAttributes, ReactNode, ReactHTMLElement, useRef, ReactElement, Dispatch, SetStateAction, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import MenuItem, { MenuItemProps } from './MenuItem'

type Mode = 'horizontal' | 'vertical'

type SelectedType = number | string | undefined

export interface MenuProps {
  defaultSelected?: SelectedType
  mode?: Mode
  style?: CSSProperties,
  className?: string,
  children?: ReactNode
}

export const MenuContext = createContext<{
  mode: Mode,
  selected: SelectedType,
  setSelected: Dispatch<SetStateAction<SelectedType>>
}>(null)
const RowMenu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {

  const { mode = 'horizontal', children, className, style, defaultSelected, ...restProps } = props

  const prefixCls = getPrefixCls('menu')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-horizontal`]: mode === 'horizontal',
      [`${prefixCls}-vertical`]: mode === 'vertical'
    },
    className
  )

  const [selected, setSelected] = useState<string | number>(defaultSelected)
  return (
    <MenuContext.Provider value={{
      mode,
      selected,
      setSelected
    }}>
      <ul ref={ref} className={cnames} style={{ ...style }}  {...restProps}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
})

class KMenu extends Component<MenuProps, {}> {

  static Item: ForwardRefExoticComponent<MenuItemProps & RefAttributes<HTMLLIElement>> = MenuItem

  menu: HTMLUListElement | null

  render() {
    return (
      <RowMenu ref={node => this.menu = node}
      // mode={this.props.mode}
      >{this.props.children}
      </RowMenu>
    )
  }
}

export default KMenu