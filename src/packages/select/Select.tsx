import React, { Component, FC, ReactElement, cloneElement } from "react";
import { getPrefixCls, childrenToArray } from "@/utils";
import classNames from "classnames";
import KInput, { InputProps } from "../input";
import KOptions, { SelectorOptionProps } from "./Option";


export interface SelectorProps extends InputProps {
  children?: ReactElement<SelectorOptionProps>[]
}

const RowSelector: FC<SelectorProps> = props => {

  const { className, style, children, ...restProps } = props

  const prefixCls = getPrefixCls('seletor')

  const selectorCls = classNames(
    prefixCls,
    className
  )

  const child = childrenToArray(children).map((ele: ReactElement, index) => {
    if (!ele) return

    return cloneElement(ele, {
      key: index,
    })

  })

  return (
    <div className={selectorCls} style={{ ...style }}>
      <KInput
        className={`${prefixCls}-inner`}
        {...restProps}
        suffixIcon="arrow-down" />
      <ul className={`${prefixCls}-menu`}>
        {child}
      </ul>
    </div>
  )

}


class KSeletor extends Component<SelectorProps, {}> {

  static Option: FC<SelectorOptionProps> = KOptions

  render() {
    return (
      <RowSelector {...this.props} />
    )
  }
}

export default KSeletor