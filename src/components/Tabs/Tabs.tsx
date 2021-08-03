import React from "react";
import classNames from "classnames";

export interface TabsProps {
  className?: string;
  defaultIndex?: number;
  onSelect: ((selectIndex: number) => void)
}

const Tabs: React.FC<TabsProps> = props => {
  const { className, children } = props
  const classes = classNames('yewei-tabs', className)

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0
}

export default Tabs