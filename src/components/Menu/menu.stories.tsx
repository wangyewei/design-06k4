import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
    <MenuItem>
      menu item 1
    </MenuItem>
    <MenuItem disabled>
      menu item2 disabled
    </MenuItem>
    <MenuItem>
      menu item3
    </MenuItem>
  </Menu>
)

export const diffrentMenu = () => (
  <Menu mode="vertical">
    <MenuItem>
      Menu item1
    </MenuItem>
    <MenuItem disabled>
      Menu item2 disabled
    </MenuItem>
    <MenuItem>
      Menu item3
    </MenuItem>
  </Menu>
)

export const diffrentSubMenu = () => (
  <Menu>
    <MenuItem>Menu item 1</MenuItem>
    <MenuItem>Menu item 2</MenuItem>
    <SubMenu title="subMenu">
      <MenuItem>SubMenu item1</MenuItem>
      <MenuItem disabled>SubMenu item2</MenuItem>
      <MenuItem>SubMenu item3</MenuItem>
    </SubMenu>

  </Menu>
)

storiesOf('菜单导航 Menu', module)
  .add('Menu', defaultMenu)
  .add('不同横纵向的 Menu', diffrentMenu)
  .add('带下拉菜单的 Menu', diffrentSubMenu)