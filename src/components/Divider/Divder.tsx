import React, { Children, FC, ReactNode } from "react";

import classNames from "classnames";
export interface BasedDividerProps {
  className: string,
  children: ReactNode,
  dashbord: boolean
}

export type DivderProps = Partial<BasedDividerProps>

export const KDivider: FC<DivderProps> = (props) => {

  const {
    className,
    ...resetProps
  } = props
  const cname = classNames('k4-divider', className)
  return (
    <>
      <div className={cname} {...resetProps}>
        {
          Children
        }
      </div>
    </>
  )
}

KDivider.defaultProps = {
  dashbord: false
}

export default KDivider