import { FC } from 'react'
import KMenu, { MenuProps } from './KMenu'
import KSubMenu, { SubMenuProps } from './KSubMenu'
import KmenuItem, { MenuItemProps } from './KMenuItem'
export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

const TransMenu = KMenu as IMenuComponent
TransMenu.Item = KmenuItem
TransMenu.SubMenu = KSubMenu

export default TransMenu