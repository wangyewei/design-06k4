import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from 'react-transition-group'
import { MenuContext } from './Menu'
import { MenuItemProps } from "./MenuItem";
import Icon from '../Icon/Icon'

export interface SubMenuProps {
  index?: string,
  title: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
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
      if (childernElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childernElement, {
          index: `${index}-${i}`
        })
      } else {
        throw Error('yewei-design-Waring: SubMenu has a child witch is not a MenuItem component')
      }
    })
    return (
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="zoom-in-top"
        appear
      >
        <ul className={SubMenuClasses}>
          {childrenComponent}
        </ul>
      </CSSTransition>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="yewei-submenu-title"
        {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="yewei-arrow-icon" />
      </div>
      {renderChildern()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu