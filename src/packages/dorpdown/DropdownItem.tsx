import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { VisibleContext } from "./Dropdown";

export interface DropDwonItemProps {
  disabled?: boolean,
  danger?: boolean,
  changeVisible?: boolean;
  onClick?: (visible?: boolean) => void;
  children?: ReactNode,
  className?: string,
  style?: CSSProperties,
}

const KDropDwonItem: FC<DropDwonItemProps> = props => {

  const { visible, setVisible } = useContext(VisibleContext)

  const { className, children, style, disabled = false, danger = false, changeVisible = true, onClick, ...restProps } = props

  const prefixCls = getPrefixCls('dropdown-item')
  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-danger`]: danger
    },
    className
  )

  const liclick = (visible: boolean) => {
    changeVisible && setVisible(false)
    onClick && onClick(visible)
  }
  return (
    <>
      <li className={cnames} onClick={() => liclick(visible)}>{children}</li>
    </>
  )
}

export default KDropDwonItem