/*
 * @Author: YeWei Wang
 * @Date: 2022-03-07 14:17:32
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 按钮
 * @LastEditTime: 2022-03-07 16:02:26
 * @Version: 1.0
 * @FilePath: \design-06k4\src\packages\button\Button.tsx
 */

import React, { FC, ReactNode } from "react"
import type { BasedProps } from "@/utils"
import classnames from 'classnames'
import { getPrefixCls } from '@/utils/index'

type ButtonBasedType = 'primary' | 'default' | 'dashed' | 'link' | 'text'

export interface ButtonBaseProps extends BasedProps {
  btnType: ButtonBasedType
}

export const KButton: FC<ButtonBaseProps> = (props) => {
  const {
    className,
    children,
    btnType,
    ...rest
  } = props

  const prefixCls = getPrefixCls('button')

  const cname = classnames(prefixCls, className, `${prefixCls}-${btnType}`)
  const currentBtnType = (type: string): ReactNode => {
    switch (type) {
      case 'link':
        return (
          <a href="" className={cname}>{children}</a>
        )
      case 'text':
        return (
          <span className={cname}>{children}</span>
        )
      default:
        return (
          <button className={cname}>{children}</button>
        )
    }

  }

  return (
    <>
      {currentBtnType(btnType)}
    </>
  )
}


export default KButton