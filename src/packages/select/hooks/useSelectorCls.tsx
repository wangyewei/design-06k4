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
    {
      [`${prefixCls}-menu-hidden`]: !param.menuVis
    }
  )

  const selectorInnerCls = classNames(
    `${prefixCls}-inner`,
    {
      [`${prefixCls}-inner-input`]: param.input
    }
  )
  return {
    selectorCls,
    selectorMenuCls,
    selectorInnerCls
  }
}