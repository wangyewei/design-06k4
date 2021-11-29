import { ReactElement, FC, InputHTMLAttributes } from "react";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export declare type KInputSize = 'lg' | 'sm';
export interface KInputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /** 是否禁用 */
    disabled?: boolean;
    /** input尺寸 */
    size?: KInputSize;
    /** 添加fontawsome支持的图标 */
    icon?: IconProp;
    /** input前缀 */
    prepend?: string | ReactElement;
    /** input后缀 */
    append?: string | ReactElement;
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
export declare const KInput: FC<KInputProps>;
export default KInput;
