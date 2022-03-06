/*
 * @Author: YeWei Wang
 * @Date: 2022-03-06 01:37:03
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 前缀
 * @LastEditTime: 2022-03-06 01:41:36
 * @Version: 1.0
 * @FilePath: \design-06k4-2\src\shared\prefixCls.ts
 */

export const getPrefixCls = (val: string, prefix?: string): string => (prefix ? prefix : "k_") + val
