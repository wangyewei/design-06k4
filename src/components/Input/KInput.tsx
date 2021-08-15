import React, { ReactElement, FC, InputHTMLAttributes } from "react"
import classNames from "classnames"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type KInputSize = 'lg' | 'sm'

export interface KInputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** 是否禁用 */
  disabled?: boolean;
  /** input尺寸 */
  size?: KInputSize;
  /** 添加fontawsome支持的图标 */
  icon?: IconProp;
  /** input前缀 */
  prepend?: string | ReactElement
  /** input后缀 */
  apend?: string | ReactElement,
}
/**
 * 
 * 功能丰富的输入框！
 * 
 * ### 使用方法
 * ~~~js
 * import { KInput } from '06k4-design'
 * ~~~
 * 
 */
export const KInput: FC<KInputProps> = (props) => {
  const { disabled, size, icon, prepend, apend, style, ...restProps } = props
  const classes = classNames('yewei-input-wrapper', {
    [`yewei-input-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || apend,
    'input-group-append': !!apend,
    'input-group-prepend': !!prepend
  })
  return (
    <div className={classes} style={style}>
      <input
        className="yewei-input-inner"
        type="text"
        {...restProps} />
    </div>
  )
}

export default KInput;