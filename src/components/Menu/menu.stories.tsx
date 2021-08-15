import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import KMenu from './KMenu'
import KMenuItem from './KMenuItem'
import KSubMenu from './KSubMenu'

export const defaultMenu = () => (
  <KMenu defaultIndex='0' onSelect={(index) => { action(`clicked ${index} item`) }} >
    <KMenuItem>
      menu item 1
    </KMenuItem>
    <KMenuItem disabled>
      menu item2 disabled
    </KMenuItem>
    <KMenuItem>
      menu item3
    </KMenuItem>
  </KMenu>
)

export const diffrentMenu = () => (
  <KMenu mode="vertical">
    <KMenuItem>
      KMenu item1
    </KMenuItem>
    <KMenuItem disabled>
      KMenu item2 disabled
    </KMenuItem>
    <KMenuItem>
      KMenu item3
    </KMenuItem>
  </KMenu>
)

export const diffrentSubMenu = () => (
  <KMenu>
    <KMenuItem>KMenu item 1</KMenuItem>
    <KMenuItem>KMenu item 2</KMenuItem>
    <KSubMenu title="subMenu">
      <KMenuItem>KSubMenu item1</KMenuItem>
      <KMenuItem disabled>KSubMenu item2</KMenuItem>
      <KMenuItem>KSubMenu item3</KMenuItem>
    </KSubMenu>

  </KMenu>
)

storiesOf('菜单导航 KMenu', module)
  .add('KMenu', defaultMenu)
  .add('不同横纵向的 KMenu', diffrentMenu)
  .add('带下拉菜单的 KMenu', diffrentSubMenu)