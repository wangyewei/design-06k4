import React, { FC } from "react";
import { BasedProps } from '../basedTypes'
import classNames from "classnames";
import { getPreCls } from "../../shared";
export interface BasedDividerProps extends BasedProps {
  dashbord: boolean
}

// export type DivderProps = Partial<BasedDividerProps>

export const KDivider: FC<Partial<BasedDividerProps>> = (props) => {
  const {
    className,
    children,
    dashbord,
    ...resetProps
  } = props

  const preCls: string = getPreCls('divider')

  console.log(preCls)
  const cname = classNames('k4-divider', className)
  return (
    <>
      <div className={cname} {...resetProps}>
        {
          children && (
            <span className=""></span>
          )
        }
      </div>
    </>
  )
}

KDivider.defaultProps = {
  dashbord: false
}

export default KDivider