import React, { FC, ReactNode, useState } from "react";
import KInput, { InputProps } from "../input/Input";
import KIcon from "../icon";
import classNames from "classnames";
import { getPrefixCls } from '@/utils/'
export interface InputNumberProps extends InputProps {
  max?: number,
  min?: number
  defaultValue?: number
}

const KInputNumber: FC<InputNumberProps> = props => {

  const { className, style, defaultValue = 0, max = 100, min = 0, ...rsetProps } = props

  const [value, setValue] = useState<number>(defaultValue)
  const [controlVis, setControlVis] = useState<boolean>(false)

  const prefixCls = getPrefixCls('input-num')

  const inputCls = classNames(
    prefixCls,
    className
  )

  const numControlCls = classNames(
    `${prefixCls}-control`,
    {
      [`${prefixCls}-control-vis`]: controlVis
    }
  )

  const controlItemCls = (math: 'add' | 'min') => classNames(
    `${prefixCls}-control-item`,
    {
      [`${prefixCls}-control-${math}`]: math,
      [`${prefixCls}-control-add-disabled`]: math === 'add' && value === max,
      [`${prefixCls}-control-min-disabled`]: math === 'min' && value === min
    }
  )

  const numberControl = (math: 'add' | 'min') => {
    if (math === 'add') {
      if (value < max) {
        setValue(value + 1)
      }
    } else {
      if (value > min) {
        setValue(value - 1)
      }
    }
  }
  const suffix: ReactNode = (
    <span className={numControlCls}
      onMouseEnter={() => setControlVis(true)}
      onMouseLeave={() => setControlVis(false)}>
      <span className={controlItemCls('add')} onClick={() => numberControl('add')}><KIcon icon="plus" /></span>
      <span className={controlItemCls('min')} onClick={() => numberControl('min')}><KIcon icon="minus" /></span>
    </span>
  )

  return (
    <KInput
      className={inputCls}
      suffix={suffix}
      value={value}
      onMouseEnter={() => setControlVis(true)}
      onMouseLeave={() => setControlVis(false)}
      style={{ ...style }}
      {...rsetProps} />
  )
}


export default KInputNumber