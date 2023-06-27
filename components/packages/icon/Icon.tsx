import React, { FC } from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { getPrefixCls, tupleStr } from "@/utils";

const ThemePropsTuple = tupleStr('primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark')
type ThemeProps = typeof ThemePropsTuple[number]

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const KIcon: FC<IconProps> = (props) => {

  const {
    className,
    theme,
    ...restProps
  } = props

  const prefixCls = getPrefixCls('icon')

  const cnames = classNames(
    prefixCls,
    {
      [`icon-${theme}`]: theme
    },
    className,
  )
  return <FontAwesomeIcon className={cnames} {...restProps} />
}

export default KIcon