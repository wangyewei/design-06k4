import React, { FC, ReactNode, useContext, useState } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import { SelectorContext } from "./Select";

export interface SelectorOptionProps {
  className?: string
  value: string | number
  index?: number,
  optionSelected?: boolean,
  disabled?: boolean,
  emptyData?: boolean,
  children?: ReactNode
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
    setHoverOption,
    multipleValueStack,
    setMultipleValueStack,
    mode
  } = useContext(SelectorContext)

  const [multipleSelected, setMultipleSelected] = useState<boolean>(false)

  const prefixCls = getPrefixCls('selector-option')

  const optionCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-selected`]: !disabled && selectedOption === index || mode !== 'default' && multipleSelected,
      [`${prefixCls}-hover`]: !disabled && hoverOption === index,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-empty`]: emptyData
    },
    className
  )

  const onClick = () => {
    if (disabled) return
    if (mode === 'default') {
      setValue(optionValue)
      setSelectedOption(index)
      return
    }

    if (!multipleSelected) {
      setMultipleValueStack([...multipleValueStack, optionValue])
    }

    if (multipleSelected) {
      const _stack = []
      multipleValueStack.forEach(val => _stack.push(val))
      _stack.pop()
      setMultipleValueStack(_stack)
    }

    setMultipleSelected(!multipleSelected)
  }

  return (

    <li className={optionCls}
      onClick={() => onClick()}
      onMouseEnter={() => setHoverOption(index)}
      onMouseLeave={() => setHoverOption(-1)}
      {...restProps}
    >
      {children}
    </li>
  )
}

export default KOptions