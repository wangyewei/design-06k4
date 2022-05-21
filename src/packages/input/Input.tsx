import React, { Component, CSSProperties, FC, InputHTMLAttributes } from "react";
import { getPrefixCls } from "@/utils";
import classNames from "classnames";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  style?: CSSProperties,
}

const RowInput: FC<InputProps> = props => {

  const { className, style, ...restProps } = props

  const prefixCls = getPrefixCls('input')

  const cnames = classNames(
    prefixCls,
    className
  )
  return (
    <div className={cnames} style={{ ...style }} >
      <input type="text" className={`${prefixCls}-inner`} {...restProps} />
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