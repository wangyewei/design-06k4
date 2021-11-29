import { FC } from 'react';
import { MenuProps } from './KMenu';
import { SubMenuProps } from './KSubMenu';
import { MenuItemProps } from './KMenuItem';
export declare type IMenuComponent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
