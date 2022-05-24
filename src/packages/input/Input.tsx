import React, { Component, CSSProperties, FC, InputHTMLAttributes, ReactNode } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import KIcon, { IconProps } from "../icon";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string,
  style?: CSSProperties,
  prefixIcon?: IconProps['icon'],
  size?: 'small' | 'middle' | 'large',
  addonBefore?: ReactNode,
  addonAfter?: ReactNode,
}

const RowInput: FC<InputProps> = props => {

  const { className, style, prefixIcon, size = 'middle', addonBefore, addonAfter, ...restProps } = props

  const prefixCls = getPrefixCls('input')

  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-with-prefix`]: prefixIcon,
      [`${prefixCls}-${size}`]: size
    },
    className
  )
  return (
    <div className={cnames} style={{ ...style }} >
      {addonBefore && <div className={`${prefixCls}-addon-before ${prefixCls}-addon`}>{addonBefore}</div>}
      {prefixCls && <KIcon icon={prefixIcon} className={`${prefixCls}-prefix`} />}
      <input type="text" className={`${prefixCls}-inner`} {...restProps} />
      {addonAfter && <div className={`${prefixCls}-addon-after ${prefixCls}-addon`}>{addonAfter}</div>}
    </div>
  )
}

class KInput extends Component<InputProps, {}> {
  render() {
    return (
      <RowInput {...this.props} />
    )
  }
}

export default KInput