/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 21:34:57
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 类型相关工具
 * @LastEditTime: 2022-03-07 23:02:27
 * @Version: 1.0
 * @FilePath: \design-06k4\src\utils\typeUtils.ts
 */

import { ReactNode } from 'react'

export type BasedProps = {
  className?: string,
  children?: ReactNode
}
// 深度不可变且类似 Array 的结构
export const tupleStr = <T extends string[]>(...args: T) => args
export const tupleNum = <T extends number[]>(...args: T) => args