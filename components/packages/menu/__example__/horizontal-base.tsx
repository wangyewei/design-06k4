import React from "react";
import KMenu from "../";

const HoriMenu = () => {

  const { Item, SubMenu } = KMenu
  return (
    <KMenu defaultSelected={['subMenu-one', 'two']}>
      <Item itemKey="one" icon="cloud-bolt"> Navigation One</Item>
      <SubMenu title={<span>Naigation Two - Submenu</span>} icon="coffee" itemKey="subMenu-one">
        <Item itemKey="two">submenu item one</Item>
        <Item itemKey="three">submenu item two</Item>
      </SubMenu>
    </KMenu>
  )
}

export default HoriMenu