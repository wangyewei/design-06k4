import React, { FC } from "react";
export interface MenuItemProps {
    /**菜单项索引 */
    index?: string;
    /**是否禁用 */
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare const KMenuItem: FC<MenuItemProps>;
export default KMenuItem;
