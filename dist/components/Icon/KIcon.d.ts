import { FC } from "react";
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
/**
 * 页面中最常用的的字体图标元素
 * ### 引用方法
 *
 * ~~~js
 * import { KIcon } from '06k4-design'
 * ~~~
 */
export declare const KIcon: FC<IconProps>;
export default KIcon;
