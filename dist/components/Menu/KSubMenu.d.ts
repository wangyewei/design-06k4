import { FC } from "react";
export interface SubMenuProps {
    /**菜单项索引 */
    index?: string;
    /**下拉菜单标题 */
    title: string;
    className?: string;
}
export declare const KSubMenu: FC<SubMenuProps>;
export default KSubMenu;
