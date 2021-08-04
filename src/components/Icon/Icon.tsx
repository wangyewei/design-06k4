import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = props => {
  const { className, theme, ...restPros } = props
  const classes = classNames('yewei-icon', className, {
    [`yewei-icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restPros} />
  )
}

export default Icon