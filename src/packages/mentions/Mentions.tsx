import { getPrefixCls } from "@/utils";
import classNames from "classnames";
import React, { FC } from "react";
import KInput, { InputProps } from "../input";

export interface MentionsProps extends Omit<InputProps, 'onChange'> {

}

const KMentions: FC<MentionsProps> = props => {

  const { className, ...restProps } = props

  const prefixCls = getPrefixCls('mentions')

  const mentionsCls = classNames(
    prefixCls,
    className
  )

  return (
    <div className={mentionsCls}>
      <KInput {...restProps} />
    </div>
  )
}

export default KMentions