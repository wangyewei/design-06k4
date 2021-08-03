import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallbak = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallbak;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallbak;
  mode?: MenuMode
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('yewei-menu', className, {
    'yewei-menu-vertical': mode === 'vertical',
    'yewei-menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: number): void => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode: mode
  }

  const renderChildern = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index })
      } else {
        throw Error('yewei-design-Waring: Menu has a child witch is not a MenuItem component')
      }
    })
  }
  return (
    <MenuContext.Provider value={passedContext}>
      <ul className={classes}
        style={style}
        data-testid="test-menu">
        {renderChildern()}
      </ul>
    </MenuContext.Provider>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu