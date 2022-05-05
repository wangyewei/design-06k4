import React, { FC, CSSProperties, ReactNode, createContext, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KDropDownMenu from "./DropdownMenu";
import KDropDownItem from './DropdownItem'

////////////////////  该版本Dropdown表现可能较差，下个版本进行升级 - wangyewei /////////////////////////////

type DropDonTrigger = 'hover' | 'click'

interface DropDownProps {
  trigger?: DropDonTrigger,
  title?: ReactNode,
  onVisibleChange?: (visible?: boolean) => void;
  className?: string,
  style?: CSSProperties,
  children?: ReactNode
}


export interface DropdownPreProps extends FC<DropDownProps> {
  Menu?: typeof KDropDownMenu;
  Item?: typeof KDropDownItem;
}

export const VisibleContext = createContext<boolean>(false)

const KDropDown: DropdownPreProps = (props) => {

  const { title, className, style, children, trigger = 'hover', onVisibleChange, ...restProps } = props

  const prefixCls = getPrefixCls('dropdown')

  const cname = classNames(
    prefixCls,
    className
  )

  const [menuvisible, setMenuvisible] = useState(false)
  const mouseEnter = () => {
    if (trigger === 'hover') {
      setMenuvisible(true)
      onVisibleChange && onVisibleChange(!menuvisible)
    }
  }
  const mouseLeave = () => {
    if (trigger === 'hover') {
      setMenuvisible(false)
      onVisibleChange && onVisibleChange(!menuvisible)
    }
  }
  const onClick = () => {
    if (trigger === 'click') {
      setMenuvisible(true)
      onVisibleChange && onVisibleChange(!menuvisible)
    }
  }
  return (
    <div className={cname}
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
      onClick={() => onClick()}
    >
      <VisibleContext.Provider value={menuvisible}>
        <div className={`${prefixCls}-title`}
        >
          {title}
        </div>
        {children}
      </VisibleContext.Provider>
    </div>
  )
}


KDropDown.Menu = KDropDownMenu
KDropDown.Item = KDropDownItem

export default KDropDown