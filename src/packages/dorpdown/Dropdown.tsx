import { getPrefixCls } from "@/utils";
import React, { FC, CSSProperties, ReactNode } from "react";

export interface DropDownProps {
  arrow?: boolean,
  className?: string,
  style?: CSSProperties,
  children?: ReactNode
}

const KDropDown: FC<DropDownProps> = (props) => {

  const { arrow, className, style, children, ...restProps } = props

  const prefixCls = getPrefixCls('dropdown')
  return (
    <></>
  )
}

export default KDropDown