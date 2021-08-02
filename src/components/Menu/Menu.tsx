import React, { useState, createContext } from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallbak = (selectedIndex: number) => void

export interface MebuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallbak;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallbak;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MebuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('yewei-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number): void => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <MenuContext.Provider value={passedContext}>
      <ul className={classes}
        style={style}>
        {children}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu