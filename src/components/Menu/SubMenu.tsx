import React, { useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'
import { MenuItemProps } from "./MenuItem";

export interface SubMenuProps {
  index?: number,
  title: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const conetxt = useContext(MenuContext)
  const classes = classNames('yewei-menu-item yewei-submenu-item', className, {
    'is-active': conetxt.index === index
  })
  const renderChildern = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childernElement = child as FunctionComponentElement<MenuItemProps>
      if (childernElement.type.displayName === 'MenuItem') {
        return childernElement
      } else {
        throw Error('yewei-design-Waring: SubMenu has a child witch is not a MenuItem component')
      }
    })
    return (
      <ul className='yewei-submenu'>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="yewei-submenu-title">
        {title}
      </div>
      {renderChildern()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu