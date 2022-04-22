import React, { FC } from "react";
import classNames from "classnames";
import KIcon from "../icon";
import { getPrefixCls } from "@/utils";
export type LoadingIconProps = {
  loading: boolean
}
const LoadingIcon: FC<LoadingIconProps> = (props) => {
  const { loading } = props

  const prefixCls = getPrefixCls('loding-icon')
  const cnames = classNames(
    prefixCls,
    {
      [`${prefixCls}-loding`]: loading
    }
  )
  return <KIcon icon="circle-notch" className={cnames}></KIcon>
}

export default LoadingIcon