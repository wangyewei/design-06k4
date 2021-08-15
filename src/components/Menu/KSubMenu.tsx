import React, { useContext, FunctionComponentElement, useState, FC } from "react";
import classNames from "classnames";
import { MenuContext } from './KMenu'
import { MenuItemProps } from "./KMenuItem";
import KIcon from '../Icon/KIcon'
import KTransition from "../Transition/KTransition";

export interface SubMenuProps {
  /**菜单项索引 */
  index?: string,
  /**下拉菜单标题 */
  title: string,
  className?: string
}

export const KSubMenu: FC<SubMenuProps> = ({ index, title, children, className }) => {
  const conetxt = useContext(MenuContext)
  const openSubMenus = conetxt.defaultOpenSubMenus as Array<string>
  const isOpend = (index && conetxt.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpend)
  const classes = classNames('yewei-menu-item yewei-submenu-item', className, {
    'is-active': conetxt.index === index,
    'is-opend': menuOpen,
    'is-vertical': conetxt.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    window.clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = conetxt.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvents = conetxt.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}
  const renderChildern = () => {

    const SubMenuClasses = classNames('yewei-submenu', {
      'yewei-menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childernElement = child as FunctionComponentElement<MenuItemProps>
      if (childernElement.type.displayName === 'KMenuItem') {
        return React.cloneElement(childernElement, {
          index: `${index}-${i}`
        })
      } else {
        throw Error('yewei-design-Waring: KSubMenu has a child witch is not a KMenuItem component')
      }
    })
    return (
      <KTransition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={SubMenuClasses}>
          {childrenComponent}
        </ul>
      </KTransition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="yewei-submenu-title"
        {...clickEvents}>
        {title}
        <KIcon icon="angle-down" className="yewei-arrow-icon" />
      </div>
      {renderChildern()}
    </li>
  )
}

KSubMenu.displayName = 'KSubMenu'

export default KSubMenu;