/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 14:57:14
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 打包出口
 * @LastEditTime: 2022-03-08 14:07:11
 * @Version: 1.0
 * @FilePath: \design-06k4\src\index.ts
 */
import './style/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export { default as KDivider } from '@/packages/divider'
export type { BasedDividerProps } from '@/packages/divider'

export { default as KButton } from '@/packages/button'
export type { ButtonProps } from '@/packages/button'

export { KRow, KCol } from '@/packages/grid'
export type { RowProps } from '@/packages/grid'

export { default as KLayout } from '@/packages/layout'
export type { LayoutProps } from '@/packages/layout'

export { default as KSpace } from '@/packages/space'
export type { SpaceProps } from '@/packages/space'

export { default as KIcon } from '@/packages/icon'
export type { IconProps } from '@/packages/icon'