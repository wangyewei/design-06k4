import React, { CSSProperties, forwardRef, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { tupleNum, getPrefixCls } from "@/utils";


const Levels = tupleNum(1, 2, 3, 4, 5, 6)
type LevelProps = typeof Levels[number]

export interface TitleProps extends HTMLAttributes<HTMLHRElement> {
  level?: LevelProps,
  children?: ReactNode,
  className?: string,
  style?: CSSProperties,
  onClick: MouseEventHandler<HTMLHRElement>
}

const Title = forwardRef<HTMLDivElement, TitleProps>((props, ref) => {

  const {
    level = 3,
    children,
    className,
    style,
    onClick,
    ...restProps
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
    <TagName ref={ref} className={cname} style={{ ...style }} onClick={onClick} {...restProps}>
      {children}
    </TagName>
  )
})

export default Title