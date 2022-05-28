import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { Component, FC, ReactElement } from "react";
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

  return (
    <div className={selectorCls} style={{ ...style }}>
      <KInput {...restProps} />
      <ul className={`${prefixCls}-menu`}>
        {children}
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