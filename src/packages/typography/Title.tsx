import React, { forwardRef, ReactNode } from "react";
import classNames from "classnames";
import { tupleNum, getPrefixCls } from "@/utils";


const Levels = tupleNum(1, 2, 3, 4, 5, 6)
type LevelProps = typeof Levels[number]

export interface TitleProps {
  level?: LevelProps,
  children?: ReactNode,
  className?: string
}

const Title = forwardRef<HTMLDivElement, TitleProps>((props, ref) => {

  const {
    level = 3,
    children,
    className
  } = props


  const TagName: any = `h${level}`
  const prefixCls = getPrefixCls('title')

  const cname = classNames(
    prefixCls,
    {
      [`${prefixCls}-${level}`]: level
    },
    className
  )

  return (
    <TagName ref={ref} className={cname}>
      {children}
    </TagName>
  )
})

export default Title