import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { forwardRef, CSSProperties, Component, createContext } from "react";

type Mode = 'horizontal' | 'vertical'

export interface MenuProps {
  mode?: Mode
  style?: CSSProperties,
  className?: string
}

export const MenuContext = createContext(null)
const RowMenu = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {

  const { mode = 'horizontal', children, className, style, ...restProps } = props

  const prefixCls = getPrefixCls('menu')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-horizontal`]: mode === 'horizontal',
      [`${prefixCls}-vertical`]: mode === 'vertical'
    },
    className
  )
  return (
    <ul ref={ref} className={cnames} style={{ ...style }}  {...restProps}>
      {children}
    </ul>
  )
})

class KMenu extends Component<MenuProps, {}> {
  render() {
    return (
      <MenuContext.Provider value="1">
        <RowMenu />
      </MenuContext.Provider>
    )
  }
}

export default KMenu