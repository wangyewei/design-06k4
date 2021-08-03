import React, { useContext, FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './Menu'
import { MenuItemProps } from "./MenuItem";
// import { clearTimeout } from "timers";

export interface SubMenuProps {
  index?: number,
  title: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {

  const [menuOpen, setOpen] = useState(false)

  const conetxt = useContext(MenuContext)
  const classes = classNames('yewei-menu-item yewei-submenu-item', className, {
    'is-active': conetxt.index === index
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
        return childernElement
      } else {
        throw Error('yewei-design-Waring: SubMenu has a child witch is not a MenuItem component')
      }
    })
    return (
      <ul className={SubMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="yewei-submenu-title"
        {...clickEvents}>
        {title}
      </div>
      {renderChildern()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu