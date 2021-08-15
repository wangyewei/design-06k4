import React, { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}
/**
 * 页面中最常用的的字体图标元素
 * ### 引用方法
 * 
 * ~~~js
 * import { KIcon } from '06k4-design'
 * ~~~
 */
export const KIcon: FC<IconProps> = props => {
  const { className,
    /** 设置 KIcon 的主题*/
    theme
    , ...restPros } = props
  const classes = classNames('yewei-icon', className, {
    [`yewei-icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restPros} />
  )
}

export default KIcon;