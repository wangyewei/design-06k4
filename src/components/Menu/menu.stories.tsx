import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

export const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <MenuItem>
      cool link 2
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

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('不同横纵向的 Menu', diffrentMenu)
  .add('带下拉菜单的 Menu', diffrentSubMenu)