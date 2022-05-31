import React from "react";
import classNames from "classnames";
export default (
  prefixCls: string,
  className: string,
  param: {
    menuVis,
    input
  }
) => {
  const selectorCls = classNames(
    prefixCls,
    className
  )

  const selectorMenuCls = classNames(
    `${prefixCls}-menu`,
  )

  const selectorInnerCls = classNames(
    `${prefixCls}-inner`,
    {
      [`${prefixCls}-inner-input`]: param.input
    }
  )

  const multipleInnerCls = classNames(
    `${prefixCls}-multiple-inner`
  )

  return {
    selectorCls,
    selectorMenuCls,
    selectorInnerCls,
    multipleInnerCls
  }
}