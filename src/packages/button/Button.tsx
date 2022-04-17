/*
 * @Author: YeWei Wang
 * @Date: 2022-03-07 14:17:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 按钮
 * @LastEditTime: 2022-03-08 14:03:25
 * @Version: 1.0
 * @FilePath: \design-06k4\src\packages\button\Button.tsx
 */

import React, { AnchorHTMLAttributes, FC, forwardRef, ForwardRefRenderFunction, MouseEventHandler, ReactNode } from "react"
import { tupleStr } from "@/utils"
import { getPrefixCls } from '@/utils/index'
import classNames from "classnames"

const ButtonTypes = tupleStr('default', 'primary', 'ghost', 'dashed', 'link', 'text')
export type ButtonType = typeof ButtonTypes[number]

export type AnchorButtonProps = {
  href: string,
  target?: string;
  onClick?: MouseEventHandler<HTMLElement>
} & BaseButtonProps &
  // 去除AnchorHTMLAttributes<any>中的type和onClick
  Omit<AnchorHTMLAttributes<any>, 'type' | 'onClick'>


export interface BaseButtonProps {
  type?: ButtonType,
  className?: string,
  children?: ReactNode
}

export type ButtonProps = Partial<AnchorButtonProps>

// 定义为该类型的函数可以放进React.forwardRef函数中作为参数
const RowButton: ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {

  const {
    type = 'default',
    className,
    children,
    onClick
  } = props

  const prefixCls: string = getPrefixCls('btn')
  const cnmaes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type
    },
    className
  )

  const buttonNode: ReactNode = (
    <button className={cnmaes}
      onClick={onClick}>
      <span>{children}</span>
    </button>
  )
  return <>{buttonNode}</>
}

const KButton = forwardRef<unknown, ButtonProps>(RowButton)

export default KButton