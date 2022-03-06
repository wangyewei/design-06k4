/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:21:08
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 分割线
 * @LastEditTime: 2022-03-06 21:36:51
 * @Version: 1.0
 * @FilePath: \design-06k4-2\src\packages\divider\Divider.tsx
 */

import React, { FC } from "react";
import type { BasedProps } from '@/shared/index'
import { getPrefixCls } from '@/shared/index'
import classNames from "classnames";

export interface BasedDividerProps extends BasedProps {
  /**是否虚线 */
  dashbord: boolean,
  type: 'horizontal' | 'vertical',
  /**分割线标题的位置 */
  oritation: 'left' | 'right' | 'center'
}

// export type DivderProps = Partial<BasedDividerProps>
/**
 * 区隔内容的分割线
 * ### 引用方法
 * 
 * ~~~js
 * import { KDivider } from 'design-06k4'
 * ~~~
 */
export const KDivider: FC<Partial<BasedDividerProps>> = (props) => {
  const {
    className,
    children,
    dashbord,
    type,
    oritation,
    ...resetProps
  } = props

  const hasChildren: boolean = !!children
  const prefixCls: string = getPrefixCls('divider')
  const cname = classNames(prefixCls, className, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-child`]: hasChildren,
    [`${prefixCls}-dashed`]: dashbord,
    [`${prefixCls}-oritation-${oritation}`]: oritation,
    // [`${prefixCls}-oritation-right`]: oritation === 'right'
  })
  return (
    <>
      <div className={cname} {...resetProps}>
        {
          children && (
            <span className={`${prefixCls}-child`}>{children}</span>
          )
        }
      </div>
    </>
  )
}

KDivider.defaultProps = {
  dashbord: false,
  type: 'horizontal',
  oritation: 'center'
}

export default KDivider