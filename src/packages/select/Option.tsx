import React, { FC, useContext } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { SelectorContext } from "./Select";

export interface SelectorOptionProps {
  className?: string
  value: string | number
}

const KOptions: FC<SelectorOptionProps> = props => {
  const {
    className,
    value: optionValue,
    children,
    ...restProps
  } = props

  const { setValue } = useContext(SelectorContext)
  const prefixCls = getPrefixCls('selector-option')

  const optionCls = classNames(
    prefixCls,
    className
  )

  const onClick = () => {
    setValue(optionValue)
  }

  return (
    <li className={optionCls}
      onClick={onClick}
      {...restProps}>
      {children}
    </li>
  )
}

export default KOptions