import React from "react";
import classNames from "classnames";

interface BaseAlertProps {
  className?: string;
  success?: string;
  danger?: string;
  warning?: string;
  AlertText: string;
}
export type AlertProps = Partial<BaseAlertProps>

const Alert: React.FC<AlertProps> = props => {
  const {
    className,
    success,
    danger,
    warning,
    AlertText
  } = props
  const classes = classNames('alert', className, {
    [`alert-${success}`]: success,
    [`alert-${danger}`]: danger,
    [`alert-${warning}`]: warning,
  })
  return (
    <div className={classes}>{AlertText}</div>
  )
}

export default Alert