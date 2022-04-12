import React, { FC, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import { tupleStr, getPrefixCls } from '@/utils'

const RowAligns = tupleStr('top', 'middle', 'bottom')
const RowJustify = tupleStr('start', 'end', 'center', 'space-around', 'space-between')

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: typeof RowAligns[number],
  justify?: typeof RowJustify[number],
  prefixCls?: string,
  wrap?: boolean
}

const KRow = forwardRef<HTMLDivElement, RowProps>((props, ref) => {

  const {
    justify,
    align,
    className,
    style,
    children,
    wrap,
    ...restProps
  } = props


  const prefixCls: string = getPrefixCls('divider')

  const cnames = classNames(
    className,
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
    }
  )
  return (
    <div {...restProps}
      style={{ ...style }}
      ref={ref}
      className={cnames}>
      {children}
    </div>
  )
})

KRow.displayName = 'Row';

export default KRow