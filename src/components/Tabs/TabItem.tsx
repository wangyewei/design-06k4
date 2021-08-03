import React from "react";
import classNames from "classnames";

export interface TabsItemProps {
  className?: string;
  label?: any;
  disabled?: boolean
}

const TabItem: React.FC<TabsItemProps> = props => {
  const { className, children } = props
  const classes = classNames('yewei-tabs-item', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default TabItem