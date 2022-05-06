import React, { FC, CSSProperties, ReactNode, createContext, useState, SetStateAction, Dispatch } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KDropdownMenu from "./DropdownMenu";
import KDropdownItem from './DropdownItem'

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
  Menu?: typeof KDropdownMenu;
  Item?: typeof KDropdownItem;
}

export const VisibleContext = createContext<{
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}>({
  visible: false,
  setVisible: () => 0
})

const KDropdown: DropdownPreProps = (props) => {

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
      <VisibleContext.Provider value={{ visible: menuvisible, setVisible: setMenuvisible }}>
        <div className={`${prefixCls}-title`}
        >
          {title}
        </div>
        {children}
      </VisibleContext.Provider>
    </div>
  )
}


KDropdown.Menu = KDropdownMenu
KDropdown.Item = KDropdownItem

export default KDropdown