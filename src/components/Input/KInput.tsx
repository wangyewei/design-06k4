import React, { ReactElement, FC, InputHTMLAttributes } from "react"
import classNames from "classnames"
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import KIcon from '../Icon/KIcon'
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
  append?: string | ReactElement,
}
/**
 * 
 * 功能丰富的、安全的输入框！
 * 
 * ### 使用方法
 * ~~~js
 * import { KInput } from '06k4-design'
 * ~~~
 * 
 */
export const KInput: FC<KInputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props
  const classes = classNames('yewei-input-wrapper', {
    [`yewei-input-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  return (
    <div className={classes} style={style}>
      {prepend && <div className="yewei-input-group-prepend">{prepend}</div>}
      {icon && <div className="yewei-input-icon-wrap"><KIcon icon={icon} /></div>}
      <input
        className="yewei-input-inner"
        type="text"
        disabled={disabled}
        {...restProps} />
      {append && <div className="yewei-input-group-append">{append}</div>}
    </div>

  )
}

export default KInput;