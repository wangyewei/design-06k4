import React, { FC, useContext, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { SelectorContext } from "./Select";

export interface SelectorOptionProps {
  className?: string
  value: string | number
  index?: number,
  optionSelected?: boolean,
  disabled?: boolean,
  emptyData?: boolean
}

const KOptions: FC<SelectorOptionProps> = props => {
  const {
    className,
    value: optionValue,
    children,
    optionSelected = false,
    index,
    disabled = false,
    emptyData = false,
    ...restProps
  } = props

  const {
    setValue,
    selectedOption,
    setSelectedOption,
    hoverOption,
    setHoverOption
  } = useContext(SelectorContext)

  const prefixCls = getPrefixCls('selector-option')

  const optionCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-selected`]: !disabled && selectedOption === index,
      [`${prefixCls}-hover`]: !disabled && hoverOption === index,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-empty`]: emptyData
    },
    className
  )

  const onClick = () => {
    if (disabled) return
    setValue(optionValue)
    setSelectedOption(index)
  }

  return (
    <li className={optionCls}
      onClick={onClick}
      onMouseEnter={() => setHoverOption(index)}
      onMouseLeave={() => setHoverOption(-1)}
      {...restProps}>
      {children}
    </li>
  )
}

export default KOptions