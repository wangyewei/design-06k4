import React, { FC } from "react";
declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectCallbak = (selectedIndex: string) => void;
export interface MenuProps {
    /**默认选中的索引 */
    defaultIndex?: string;
    className?: string;
    /**横纵向展示方式 */
    mode?: MenuMode;
    style?: React.CSSProperties;
    /**选中后的回调函数 */
    onSelect?: SelectCallbak;
    /**默认选中的下拉菜单索引 */
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallbak;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
/**
 * 开发中最常用的导航菜单栏
 *
 * ### 引用方法
 *
 * ~~~js
 * import { KMenu, KMenuItem, KSubMenu } from '06k4-design'
 * ~~~
 */
export declare const KMenu: FC<MenuProps>;
export default KMenu;
